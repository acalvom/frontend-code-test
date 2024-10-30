import { types } from 'mobx-state-tree'
import uuid from 'uuid/v4'
import { BoxModel } from './models/Box'
import getRandomColor from '../utils/getRandomColor'
import CursorPointerModel from './models/CursorPointer'

const MainStore = types
  .model('MainStore', {
    boxes: types.array(BoxModel),
    cursorPosition: types.optional(CursorPointerModel, { x: 0, y: 0 }),
  })
  .actions((self) => {
    return {
      addBox(box) {
        self.boxes.push(box)
      },
      setCursorPosition(x, y) {
        self.cursorPosition.setCursorPosition(x, y)
      },
    }
  })
  .views((self) => ({}))

const store = MainStore.create()

const box1 = BoxModel.create({
  id: uuid(),
  color: getRandomColor(),
  left: 0,
  top: 0,
})

store.addBox(box1)

export default store
