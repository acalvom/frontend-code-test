import React, { useRef } from 'react'
import { observer } from 'mobx-react'
import { getRandomColor } from '../../utils'
import { useDraggableBox } from '../../hooks'

export const BoxDraggable = observer((props) => {
  const { id, width, height, color, left, top, isSelected, onDoubleClick, box, children } = props
  const boxRef = useRef(null)

  useDraggableBox(boxRef, box)

  const style = {
    backgroundColor: color,
    width,
    height,
    transform: `translate(${left}px, ${top}px)`,
    border: isSelected ? `2px dotted ${getRandomColor()}` : 'none',
  }

  return (
    <div id={id} className="box" onDoubleClick={onDoubleClick} style={style} ref={boxRef}>
      {children}
    </div>
  )
})
