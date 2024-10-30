import React from 'react'
import store from '../../stores/MainStore'
import { observer } from 'mobx-react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './Toolbar.css'

export const Toolbar = observer(() => {
  const handleAddButton = () => {
    const { x, y } = store.cursorPosition
    store.addBox(x, y)
  }

  const handleRemoveButton = () => {
    const lastBoxIndex = store.boxes.length - 1
    if (lastBoxIndex < 0) {
      toast('No more boxes to remove')
      return
    }

    const lastBox = store.boxes[lastBoxIndex]
    store.removeBox(lastBox)
  }

  return (
    <div className="toolbar">
      <ToastContainer />
      <button onClick={handleAddButton}>Add Box</button>
      <button onClick={handleRemoveButton}>Remove Box</button>
      <input type="color" />
      <span>No boxes selected</span>
    </div>
  )
})
