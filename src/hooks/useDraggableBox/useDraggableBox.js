import { useEffect } from 'react'
import interact from 'interactjs'
import { store } from '../../stores/store'

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
          const { dx, dy } = event
          const selfMove = () => box.move(box.left + dx, box.top + dy)
          const groupMove = () => store.moveSelection(dx, dy)

          box.isSelected ? groupMove() : selfMove()
        },
      },
    })

    return () => interact(ref).unset()
  }, [boxRef, box])
}
