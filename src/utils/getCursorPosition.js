export const getCursorPosition = (event, domElement = null) => {
  const { left, top } = domElement ? domElement.getBoundingClientRect() : { left: 0, top: 0 }

  const relativeX = event.clientX - left
  const relativeY = event.clientY - top

  return { x: relativeX, y: relativeY }
}