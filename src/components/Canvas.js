import React, { useRef } from 'react'

import { observer } from 'mobx-react'
import Box from '../components/Box'

function Canvas({ store }) {
  const containerRef = useRef(null)

  const handleClick = (event) => {
    if (containerRef.current) {
      const { left, top } = containerRef.current.getBoundingClientRect()
      const relativeX = event.clientX - left
      const relativeY = event.clientY - top
      console.log('relativeX', relativeX, left, event.clientX)
      console.log('relativeY', relativeY, top, event.clientY)

      store.setCursorPosition(relativeX, relativeY)
    }
  }

  return (
    <div className="canva" onClick={handleClick} ref={containerRef}>
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
        />
      ))}
    </div>
  )
}

export default observer(Canvas)
