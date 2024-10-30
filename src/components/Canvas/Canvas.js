import React, { useRef } from 'react'

import { observer } from 'mobx-react'
import { Box } from '../Box/Box'
import { getCursorPosition } from '../../utils/getCursorPosition'
import './Canvas.css'

function Canvas({ store }) {
  const canvasRef = useRef(null)

  const handleClickOnCanvas = (event) => {
    const { x, y } = getCursorPosition(event, canvasRef.current)
    store.cursorPosition.setCursorPosition(x, y)
  }

  const handleClickOnBox = (event, box) => {
    event.stopPropagation()
    store.selectBox(box)
  }

  return (
    <div className="canvas" onClick={handleClickOnCanvas} ref={canvasRef}>
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
          onClick={(event) => handleClickOnBox(event, box)}
          isSelected={store.selectedBox && store.selectedBox.id === box.id}
        />
      ))}
    </div>
  )
}

export default observer(Canvas)
