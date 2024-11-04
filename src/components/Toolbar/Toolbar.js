import React from 'react'
import { observer } from 'mobx-react'
import { ToastContainer } from 'react-toastify'
import { showToast, TOAST } from '../../utils/toastMessages'
import './Toolbar.css'

export const Toolbar = observer(({ store }) => {
  const { selectedBoxes, cursorPosition, boxes } = store
  const noSelectedBoxes = selectedBoxes.length === 0

  const handleAddButton = () => {
    const { x, y } = cursorPosition
    const name = `Box ${boxes.length + 1}`

    store.addBox(name, x, y)
  }

  const handleRemoveButton = () => {
    const noBoxes = boxes.length === 0

    if (noBoxes) return showToast(TOAST.NO_BOXES)
    if (noSelectedBoxes) return showToast(TOAST.NO_SELECTED_BOXES)

    store.removeSelection()
    showToast(TOAST.REMOVED_BOXES)
  }

  const handleColorInput = (e) => {
    const color = e.target.value
    if (noSelectedBoxes) return showToast(TOAST.NO_SELECTED_BOXES)

    store.setSelectionColor(color)
  }

  // TODO handleSelectAllButton       <button onClick={handleSelectAllButton}>Toggle Boxes</button>

  return (
    <div className="toolbar">
      <ToastContainer />
      <button onClick={handleAddButton}>Add Box</button>
      <button onClick={handleRemoveButton}>Remove Boxes</button>
      <input type="color" onChange={handleColorInput} disabled={selectedBoxes.length === 0} />
      <span>{selectedBoxes.length > 0 ? `${selectedBoxes.length} boxes are selected` : 'No box selected'}</span>
    </div>
  )
})
