import React from 'react'
import { observer } from 'mobx-react'
import { ToastContainer } from 'react-toastify'
import { showToast, TOAST } from '../../utils/toastMessages'
import './Toolbar.css'

export const Toolbar = observer(({ store }) => {
  const { selectedBox, cursorPosition, boxes } = store;

  const handleAddButton = () => {
    const { x, y } = cursorPosition
    const name = `Box ${boxes.length + 1}`

    store.addBox(name, x, y)
  }

  const handleRemoveButton = () => {
    const noBoxes = boxes.length === 0

    if (noBoxes) return showToast(TOAST.NO_BOXES)
    if (!selectedBox) return showToast(TOAST.NO_SELECTED_BOX)

    store.removeBox(selectedBox)
    showToast(TOAST.REMOVED_BOX)
  }

  const handleColorInput = (e) => {
    if (!selectedBox) return showToast(TOAST.NO_SELECTED_BOX)
    const color = e.target.value

    store.selectedBox.changeColor(color)
  }

  return (
    <div className="toolbar">
      <ToastContainer />
      <button onClick={handleAddButton}>Add Box</button>
      <button onClick={handleRemoveButton}>Remove Box</button>
      <input type="color" onChange={handleColorInput} disabled={!selectedBox} />
      <span>{selectedBox ? `${selectedBox.name} is selected` : 'No box selected'}</span>
    </div>
  )
})
