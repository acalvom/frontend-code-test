import { createMainStore } from '../stores'

export const storeSetup = (initialState) => {
  return createMainStore(
    initialState || {
      boxes: [],
      cursorPosition: { x: 0, y: 0 },
      selectedBoxes: [],
    }
  )
}
