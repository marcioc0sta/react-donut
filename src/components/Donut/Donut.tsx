import React, { useMemo, memo, useRef, useState } from 'react'
import { useDonutCoordinates } from '../../hooks'
import {
  D3parse,
  DataToParse,
  DonutProps,
  DonutSectionObject,
} from './Donut.types'

const sectionOpacityAmount = {
  ACTIVE: '1',
  INACTIVE: '0.6',
}

const Donut: React.FC<DonutProps> = ({ sectionColors, donutData }) => {
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

  const [arc, activeArc, sectionAngles] = useDonutCoordinates({
    invertData: false,
    donutRadius,
    donutInnerRadius,
    parsedData,
  })

  const sectionAngleColorIndex = currentSection =>
    donutData.findIndex(item => currentSection.data.slug === item.slug)

  return (
    <div>
      <svg width='180' height='180'>
        <g style={{ transform: 'translate(90px, 90px)' }}>
          {sectionAngles.map(section => {
            return (
              <path
                key={section.data.slug}
                fill={sectionColors[sectionAngleColorIndex(section)]}
                d={arc(section)}
              />
            )
          })}
        </g>
      </svg>
      {total} === {parsedData[0].rawValue} + {parsedData[1].rawValue}
    </div>
  )
}

export default memo(Donut)