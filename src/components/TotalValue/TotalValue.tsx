import React, { FunctionComponent } from 'react'
import { TotalValueProps } from './TotalValue.types'

const TotalValue: FunctionComponent<TotalValueProps> = ({
  totalClassName,
  total,
  coordinates,
}) => {
  return (
    <p
      className={totalClassName}
      style={{
        position: 'absolute',
        top: coordinates,
        left: coordinates,
        margin: '0',
      }}
    >
      {total}
    </p>
  )
}

export default TotalValue
