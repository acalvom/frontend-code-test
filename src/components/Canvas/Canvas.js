import React, { useRef } from 'react'

import { observer } from 'mobx-react'
import { Box } from '../Box/Box'
import { getCursorPosition } from '../../utils'
import './Canvas.css'

export const Canvas = observer(({ store }) => {
  const canvasRef = useRef(null)

  const handleCursorPosition = (event) => {
    const { x, y } = getCursorPosition(event, canvasRef.current)
    store.cursorPosition.setCursorPosition(x, y)
  }

  const handleSelectBox = (event, box) => {
    event.stopPropagation()
    box.isSelected ? store.clearSelection(box) : store.selectBox(box)
  }

  return (
    <div className="canvas" aria-label="canvas" onClick={handleCursorPosition} ref={canvasRef}>
      {store.boxes.map((box, index) => (
        <Box
          id={box.id}
          key={index}
          color={box.color}
          left={box.left}
          top={box.top}
          width={box.width}
          height={box.height}
          box={box}
          isSelected={box.isSelected}
          onDoubleClick={(event) => handleSelectBox(event, box)}
        />
      ))}
    </div>
  )
})
