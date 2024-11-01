import { onAction, types } from 'mobx-state-tree'
import { CursorPointerModel } from './CursorPointer'
import { BoxModel } from './Box'
import { createBox } from '../actions/BoxActions'

const MainStore = types
  .model('MainStore', {
    boxes: types.array(BoxModel),
    cursorPosition: types.optional(CursorPointerModel, { x: 0, y: 0 }),
    selectedBox: types.maybeNull(types.reference(BoxModel)),
  })
  .actions((self) => ({
    addBox(name, left, top) {
      const newBox = createBox({ name, left, top })
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
    saveToLocalStorage() {
      localStorage.setItem('mainStore', JSON.stringify(self))
    },
  }))
  .actions((self) => ({
    afterCreate() {
      const savedState = localStorage.getItem('mainStore')
      if (!savedState) {
        self.addBox('Box 1', 0, 0)
      } else {
        const parsedState = JSON.parse(savedState)
        self.boxes.replace(parsedState.boxes)
        self.cursorPosition = parsedState.cursorPosition
        self.selectedBox = parsedState.selectedBox
      }

      onAction(self, (call) => {
        if (call.type !== 'saveToLocalStorage') {
          self.saveToLocalStorage()
        }
      })
    },
  }))

export const createMainStore = () => MainStore.create()
