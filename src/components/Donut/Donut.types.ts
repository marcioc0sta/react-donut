export type DonutSectionObject = { slug: string; value: number; label: string }

export type ParsedDataObject = {
  slug: string
  title: string
  value: number
  rawValue: number
}
export type DataToParse = DonutProps['donutData']
export type D3parse = { parsedData: Array<ParsedDataObject>; total: number }

export interface DonutProps {
  sectionColors: Array<string>
  donutData: Array<DonutSectionObject>
  withTotal: boolean
  totalClassName: string
}

export type SectionType = {
  data: ParsedDataObject
  endAngle: number
  index: number
  padAngle: number
  startAngle: number
  value: number
}
