import {
  D3parse,
  DataToParse,
  DonutSectionObject,
} from './components/Donut/Donut.types'

export const parseData = (data: DataToParse, donutRadius: number): D3parse => {
  const valuesArr = data.map((item: DonutSectionObject) => item.value)
  const total = valuesArr.reduce((acc, current) => acc + current)

  const getDonutVal = (val: number) => (val * donutRadius) / total

  const parsedData = data.map(item => ({
    slug: item.slug,
    title: item.label,
    value: getDonutVal(item.value),
    rawValue: item.value,
  }))

  return { parsedData, total }
}
