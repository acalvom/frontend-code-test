import React from 'react'
import { observer } from 'mobx-react'
import { BoxDraggable } from './BoxDraggable'
import './Box.css'

export const Box = observer((props) => {
  return (
    <BoxDraggable {...props}>
      <div>Box</div>
    </BoxDraggable>
  )
})
