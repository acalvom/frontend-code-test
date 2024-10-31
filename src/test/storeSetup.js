import { createMainStore } from '../stores'

export const storeSetup = (initialState) => {
  const store = createMainStore(
    initialState || {
      boxes: [],
      cursorPosition: { x: 0, y: 0 },
      selectedBox: null,
    }
  )

  store.addBox('Box 1', 0, 0)

  return store
}
