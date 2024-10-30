import React, { useRef } from 'react'

import { observer } from 'mobx-react'
import Box from '../Box/Box'
import { getCursorPosition } from '../../utils/getCursorPosition'
import './Canvas.css'

function Canvas({ store }) {
  const canvasRef = useRef(null)

  const handleClick = (event) => {
    const { x, y } = getCursorPosition(event, canvasRef.current)
    store.cursorPosition.setCursorPosition(x, y)
  }

  return (
    <div className="canvas" onClick={handleClick} ref={canvasRef}>
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
          onClick={() => store.setSelectedBox(box)}
        />
      ))}
    </div>
  )
}

export default observer(Canvas)
