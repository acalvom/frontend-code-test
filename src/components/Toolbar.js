import React from 'react'
import getRandomColor from '../utils/getRandomColor'
import uuid from 'uuid/v4'
import store from '../stores/MainStore'

function Toolbar () {
  const handleAddButton = () => {
    const cursorPosition = store.cursorPosition
    const box = {
      id: uuid(),
      color: getRandomColor(),
      left: cursorPosition.x,
      top: cursorPosition.y
    }
    store.addBox(box)
  }

  const handleRemoveButton = () => {
    const lastBox = store.boxes[store.boxes.length - 1]
    store.removeBox(lastBox)
  }

  return (
    <div className="toolbar">
      <button onClick={handleAddButton}>Add Box</button>
      <button onClick={handleRemoveButton}>Remove Box</button>
      <input type="color" />
      <span>No boxes selected</span>
    </div>
  )
}

export default Toolbar
