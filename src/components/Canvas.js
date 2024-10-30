import React, { useEffect, useRef } from 'react'

import { observer } from 'mobx-react'
import Box from '../components/Box'
import { getCursorPosition } from '../utils/getCursorPosition'

function Canvas ({ store }) {
  const canvasRef = useRef(null)

  const handleClick = (event) => {
    const { x, y } = getCursorPosition(event, canvasRef.current)
    store.cursorPosition.setCursorPosition(x, y)
  }

  return (
    <div className="canva" onClick={handleClick} ref={canvasRef}>
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
