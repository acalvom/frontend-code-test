import { types } from 'mobx-state-tree'
import { CursorPointerModel } from './models/CursorPointer'
import { BoxModel } from './models/Box'
import { createBox } from './utils/createBox'

const MainStore = types
  .model('MainStore', {
    boxes: types.array(BoxModel), cursorPosition: types.optional(CursorPointerModel, { x: 0, y: 0 })
  })
  .actions((self) => ({
    addBox (left, top) {
      const newBox = createBox(left, top)
      self.boxes.push(newBox)
    },
    removeBox (box) {
      self.boxes.remove(box)
    }
  }))

const store = MainStore.create()

store.addBox(0, 0)

export default store