import * as d3 from 'd3'
import { PieArcDatum } from 'd3'

export interface DonutCoordinates {
  invertData: boolean
  donutRadius: number
  donutInnerRadius: number
  parsedData: Array<{
    slug: string
    title: string
    value: number
    rawValue: number
  }>
}

export type Section = { value: number; rawValue: number }

const useDonutCoordinates = (config: DonutCoordinates) => {
  const { invertData, donutRadius, donutInnerRadius, parsedData } = config

  const activeArcProperties = {
    INNER_RADIUS: (rad: number) => rad - 20, //increase size from center > outside
    OUTER_RADIUS: (rad: number) => rad + 5, //increase size from+ 5, //increase size from center > inside
  }

  const radius = Math.min(donutRadius, donutRadius) / 2

  const arc = d3
    .arc<PieArcDatum<Section>>()
    .innerRadius(radius - donutInnerRadius)
    .outerRadius(radius)

  const activeArc = d3
    .arc<PieArcDatum<Section>>()
    .innerRadius(activeArcProperties.INNER_RADIUS(radius))
    .outerRadius(activeArcProperties.OUTER_RADIUS(radius))

  const sectionAngles = d3
    .pie<Section>()
    .value(function (data) {
      return data.value
    })
    .sort(function (current, next) {
      if (invertData) {
        return next.rawValue - current.rawValue
      }
      return current.rawValue - next.rawValue
    })(parsedData)

  return { arc, activeArc, sectionAngles }
}

export default useDonutCoordinates
