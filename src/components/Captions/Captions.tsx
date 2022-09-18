import React, { FunctionComponent } from 'react'
import { CaptionsProps } from './Captions.types'

const Captions: FunctionComponent<CaptionsProps> = ({ captions }) => {
  return (
    <div>
      {captions.map(({ val, label }) => (
        <>
          <p>{label}</p>
          <p>{val}</p>
        </>
      ))}
    </div>
  )
}

export default Captions
