import React, { FunctionComponent } from 'react'
import { TotalValueProps } from './TotalValue.types'

const TotalValue: FunctionComponent<TotalValueProps> = ({
  totalClassName,
  total,
}) => {
  return (
    <p
      className={totalClassName}
      style={{
        position: 'absolute',
        top: '80px',
        left: '80px',
        margin: '0',
      }}
    >
      {total}
    </p>
  )
}

export default TotalValue
