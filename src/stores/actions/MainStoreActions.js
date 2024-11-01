import { getSnapshot, onAction } from 'mobx-state-tree'
import { createBox } from './BoxActions'

export const MainStoreKey = 'MainStore'

export const MainStoreActions = (self) => {
  const addBox = (name, left, top) => {
    const newBox = createBox({ name, left, top })
    self.boxes.push(newBox)
  }

  const removeBox = (box) => {
    if (self.selectedBox === box) clearSelection()
    self.boxes.remove(box)
  }

  const selectBox = (box) => {
    self.selectedBox = box
  }

  const clearSelection = () => {
    self.selectedBox = null
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

  const setupActionListener = () => {
    onAction(self, (call) => {
      if (call.type !== 'saveToLocalStorage') {
        saveToLocalStorage()
      }
    })
  }

  return {
    addBox,
    removeBox,
    selectBox,
    clearSelection,
    saveToLocalStorage,
    loadFromLocalStorage,
    initializeStore,
    setupActionListener,
  }
}
