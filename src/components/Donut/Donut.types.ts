export type DonutSectionObject = { slug: string; value: number; label: string }

export type ParsedDataObject = {
  slug?: string
  title?: string
  value: number
  rawValue: number
}
export type DataToParse = DonutProps['donutData']
export type D3parse = { parsedData: Array<ParsedDataObject>; total: number }

export interface DonutProps {
  withCaptions: boolean
  sectionColors: Array<string>
  donutData: Array<DonutSectionObject>
  withTotal: boolean
  totalClassName: string
  donutRadius: number
  donutInnerRadius: number
  svgArea: number
}

export type SectionType = {
  data: ParsedDataObject
  endAngle: number
  index: number
  padAngle: number
  startAngle: number
  value: number
}
