import React from 'react'

export interface DonutProps {
  label: string
}

const Donut: React.FC<DonutProps> = ({ label }) => {
  return <div>{label}</div>
}

export default Donut
