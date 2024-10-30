import { types } from 'mobx-state-tree'
import { CursorPointerModel } from './CursorPointer'
import { BoxModel } from './Box'
import { createBox } from '../utils/createBox'

const MainStore = types
  .model('MainStore', {
    boxes: types.array(BoxModel),
    cursorPosition: types.optional(CursorPointerModel, { x: 0, y: 0 }),
    selectedBox: types.maybeNull(types.reference(BoxModel)),
  })
  .actions((self) => ({
    addBox(left, top) {
      const newBox = createBox(left, top)
      self.boxes.push(newBox)
    },
    removeBox(box) {
      if (self.selectedBox === box) this.clearSelection()
      self.boxes.remove(box)
    },
    selectBox(box) {
      self.selectedBox = box
    },
    clearSelection() {
      self.selectedBox = null
    },
  }))

export const createMainStore = () => MainStore.create()
