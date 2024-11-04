import { getSnapshot, onAction } from 'mobx-state-tree'
import { createBox } from './BoxActions'
import { undoManager } from '../models/MainStore'

export const MainStoreKey = 'MainStore'

export const MainStoreActions = (self) => {
  const addBox = (name, left, top) => {
    const newBox = createBox({ name, left, top })
    self.boxes.push(newBox)
  }

  const selectBox = (box) => {
    self.selectedBoxes.push(box)
  }

  const clearSelection = (box) => {
    self.selectedBoxes.remove(box)
  }

  const removeSelection = () => {
    self.selectedBoxes.slice().forEach((box) => {
      self.selectedBoxes.remove(box)
      self.boxes.remove(box)
    })
  }

  const setSelectionColor = (color) => {
    self.selectedBoxes.forEach((box) => box.changeColor(color))
  }

  const moveSelection = (left, top) => {
    undoManager.withoutUndo(() => {
      self.selectedBoxes.forEach((box) => {
        const boxLeft = box.left + left
        const boxTop = box.top + top

        box.move(boxLeft, boxTop)
      })
    })
  }

  const saveToLocalStorage = () => {
    const currentState = getSnapshot(self)
    localStorage.setItem(MainStoreKey, JSON.stringify(currentState))
  }

  const loadFromLocalStorage = () => {
    const savedState = localStorage.getItem(MainStoreKey)
    if (savedState) {
      const parsedState = JSON.parse(savedState)
      self.boxes.replace(parsedState.boxes)
      self.cursorPosition = parsedState.cursorPosition
      self.selectedBox = parsedState.selectedBox
    }
  }

  const initializeStore = () => {
    loadFromLocalStorage()
    if (self.boxes.length === 0) {
      addBox('Box 1', 0, 0)
    }
  }

  const undo = () => {
    if (undoManager.canUndo) undoManager.undo()
  }

  const redo = () => {
    if (undoManager.canRedo) undoManager.redo()
  }

  const setupActionListener = () => {
    onAction(self, (call) => {
      if (call.type !== 'saveToLocalStorage') {
        saveToLocalStorage()
      }
    })
  }

  return {
    addBox,
    selectBox,
    clearSelection,
    removeSelection,
    setSelectionColor,
    moveSelection,
    saveToLocalStorage,
    loadFromLocalStorage,
    initializeStore,
    undo,
    redo,
    setupActionListener,
  }
}
