import React from 'react'
import { observer } from 'mobx-react'
import { BoxDraggable } from './BoxDraggable'
import './Box.css'

export const Box = observer((props) => {
  const { box } = props

  return (
    <BoxDraggable {...props}>
      <div>{box.name}</div>
    </BoxDraggable>
  )
})
