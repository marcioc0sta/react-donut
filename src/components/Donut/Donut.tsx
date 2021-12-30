import React, { useMemo, memo, useRef, useState } from 'react'
import { useDonutCoordinates } from '../../hooks'
import {
  D3parse,
  DataToParse,
  DonutProps,
  DonutSectionObject,
  ParsedDataObject,
} from './Donut.types'

type SectionType = {
  data: ParsedDataObject
  endAngle: number
  index: number
  padAngle: number
  startAngle: number
  value: number
}

const sectionOpacityAmount = {
  ACTIVE: '1',
  INACTIVE: '0.6',
}

const Donut: React.FC<DonutProps> = ({
  sectionColors,
  donutData,
  totalClassName,
  withTotal,
}) => {
  const donutRadius = 140
  const donutInnerRadius = 15

  const parseData = (data: DataToParse): D3parse => {
    const valuesArr = data.map((item: DonutSectionObject) => item.value)
    const total = valuesArr.reduce((accum, current) => accum + current)

    const getDonutVal = (val: number) => (val * donutRadius) / total

    const parsedData = data.map(item => ({
      slug: item.slug,
      title: item.label,
      value: getDonutVal(item.value),
      rawValue: item.value,
    }))

    return { parsedData, total }
  }

  const { parsedData, total } = useMemo(() => parseData(donutData), [donutData])

  const { arc, activeArc, sectionAngles } = useDonutCoordinates({
    invertData: false,
    donutRadius,
    donutInnerRadius,
    parsedData,
  })

  const sectionAngleColorIndex = (currentSection: SectionType) =>
    donutData.findIndex(item => currentSection.data.slug === item.slug)

  return (
    <div style={{ position: 'relative' }}>
      <svg width='180' height='180'>
        <g style={{ transform: 'translate(90px, 90px)' }}>
          {sectionAngles.map((section: any) => {
            return (
              <path
                key={section.data.slug}
                fill={sectionColors[sectionAngleColorIndex(section)]}
                d={arc(section) || ''}
              />
            )
          })}
        </g>
      </svg>
      {withTotal && (
        <p
          className={totalClassName}
          style={{
            position: 'absolute',
            top: '80px',
            left: '80px',
            margin: '0',
          }}
        >
          {total}
        </p>
      )}
    </div>
  )
}

export default memo(Donut)
