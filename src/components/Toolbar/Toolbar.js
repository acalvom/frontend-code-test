import React from 'react'

import { observer } from 'mobx-react'
import { ToastContainer } from 'react-toastify'
import { showToast } from '../../utils/toastMessages'
import './Toolbar.css'

export const Toolbar = observer(({ store }) => {
  const handleAddButton = () => {
    const { x, y } = store.cursorPosition
    const name = `Box ${store.boxes.length + 1}`
    store.addBox(name, x, y)
  }

  const handleRemoveButton = () => {
    const noBoxes = store.boxes.length === 0
    const selectedBox = store.selectedBox

    if (noBoxes) return showToast('NO_BOXES')
    if (!selectedBox) return showToast('NO_SELECTED_BOX')

    store.removeBox(selectedBox)
    showToast('REMOVED_BOX')
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
