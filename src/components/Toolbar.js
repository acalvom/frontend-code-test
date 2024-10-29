import React from 'react'
import getRandomColor from '../utils/getRandomColor'
import uuid from 'uuid/v4'
import store from '../stores/MainStore'

function Toolbar() {
  const handleAddButton = () => {
    console.log('Add button clicked')
    const cursorPosition = store.cursorPosition
    const box = {
      id: uuid(),
      color: getRandomColor(),
      left: cursorPosition.x,
      top: cursorPosition.y,
    }
    store.addBox(box)
  }
  return (
    <div className="toolbar">
      <button onClick={handleAddButton}>Add Box</button>
      <button>Remove Box</button>
      <input type="color" />
      <span>No boxes selected</span>
    </div>
  )
}

export default Toolbar
