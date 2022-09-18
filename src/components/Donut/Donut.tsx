import React, {
  useMemo,
  memo,
  useState,
  FunctionComponent,
  ReactElement,
} from 'react'
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
  donutRadius = 140,
  donutInnerRadius = 15,
  svgArea = 180,
}) => {
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
      <svg width={svgArea} height={svgArea}>
        <g
          style={{
            transform: `translate(${svgArea / 2}px, ${svgArea / 2}px)`,
          }}
        >
          {sectionAngles.map((section: SectionType): ReactElement => {
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
        <TotalValue
          coordinates={`${svgArea / 2 - 10}px`}
          totalClassName={totalClassName}
          total={total}
        />
      )}
    </div>
  )
}

export default memo(Donut)
