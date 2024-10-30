import React from 'react'
import { observer } from 'mobx-react'
import BoxDraggable from './BoxDraggable'
import './Box.css'

function Box(props) {
  return (
    <BoxDraggable {...props}>
      <div>Box</div>
    </BoxDraggable>
  )
}

export default observer(Box)
