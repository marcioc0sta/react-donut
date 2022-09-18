import React, { useMemo, memo, useState, FunctionComponent } from 'react'
import { parseData } from '../../dataParser'
import { sectionOpacityAmount } from '../../enum'
import { useDonutCoordinates } from '../../hooks'
import TotalValue from '../TotalValue'
import { DonutProps, SectionType } from './Donut.types'

const Donut: FunctionComponent<DonutProps> = ({
  sectionColors = ['cyan', 'pink'],
  donutData,
  totalClassName = 'total',
  withTotal = true,
}) => {
  const donutRadius = 140
  const donutInnerRadius = 15
  const [activeSection, setActiveSection] = useState<string>('')

  const { parsedData, total } = useMemo(
    () => parseData(donutData, donutRadius),
    [donutData]
  )

  const { arc, activeArc, sectionAngles } = useDonutCoordinates({
    invertData: false,
    donutRadius,
    donutInnerRadius,
    parsedData,
  })

  const sectionAngleColorIndex = (currentSection: SectionType) =>
    donutData.findIndex(item => currentSection.data.slug === item.slug)

  const handleActiveSection = (slug: string) => () => {
    setActiveSection(slug)
  }

  const handleOpacity = (slug: string) => {
    return slug !== activeSection && activeSection.length !== 0
      ? sectionOpacityAmount.INACTIVE
      : sectionOpacityAmount.ACTIVE
  }

  const handleArcs = (active: boolean, section: SectionType) => {
    return active ? activeArc(section) : arc(section)
  }

  const clearActiveSection = (): void => {
    setActiveSection('')
  }

  return (
    <div style={{ position: 'relative' }}>
      <svg width='180' height='180'>
        <g style={{ transform: 'translate(90px, 90px)' }}>
          {sectionAngles.map((section: any) => {
            const slug = section?.data?.slug ?? ''
            const active = activeSection === slug
            return (
              <path
                onMouseLeave={clearActiveSection}
                onMouseEnter={handleActiveSection(slug)}
                key={slug}
                fillOpacity={handleOpacity(slug)}
                fill={sectionColors[sectionAngleColorIndex(section)]}
                d={handleArcs(active, section) || ''}
              />
            )
          })}
        </g>
      </svg>
      {withTotal && (
        <TotalValue totalClassName={totalClassName} total={total} />
      )}
    </div>
  )
}

export default memo(Donut)
