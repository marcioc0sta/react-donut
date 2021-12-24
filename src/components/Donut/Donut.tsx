import React from 'react'

interface DonutProps {
  label: string
}

const Donut: React.FC<DonutProps> = ({ label }) => {
  return <div>{label}</div>
}

export default Donut
