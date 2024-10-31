import React from 'react'

import { observer } from 'mobx-react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './Toolbar.css'

export const Toolbar = observer(({ store }) => {
  const handleAddButton = () => {
    const { x, y } = store.cursorPosition
    const name = `Box ${store.boxes.length + 1}`
    store.addBox(name, x, y)
  }

  const handleRemoveButton = () => {
    const selectedBox = store.selectedBox
    const noBoxes = store.boxes.length === 0
    if (noBoxes) {
      toast('There are no boxes to remove')
      return
    }
    if (!selectedBox ) {
      toast('No box is selected')
      return
    }
    store.removeBox(selectedBox)
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
