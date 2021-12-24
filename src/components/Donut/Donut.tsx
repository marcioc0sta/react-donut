import React from 'react'

interface DonutProps {
  label: string
}

export const Donut: React.FC<DonutProps> = ({ label }) => {
  return <div>{label}</div>
}
