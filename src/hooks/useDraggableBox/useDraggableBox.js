import { useEffect } from 'react'
import interact from 'interactjs'

export const useDraggableBox = (boxRef, box) => {
  useEffect(() => {
    let ref = boxRef.current
    if (!ref) return

    interact(ref).draggable({
      modifiers: [
        interact.modifiers.restrictRect({
          restriction: 'parent',
        }),
      ],
      listeners: {
        move(event) {
          const boxLeft = box.left + event.dx
          const boxTop = box.top + event.dy

          box.move(boxLeft, boxTop)
        },
      },
    })

    return () => interact(ref).unset()
  }, [boxRef, box])
}
