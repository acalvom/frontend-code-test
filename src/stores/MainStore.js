import { types } from 'mobx-state-tree'
import uuid from 'uuid/v4'
import { CursorPointerModel } from './models/CursorPointer'
import { BoxModel } from './models/Box'
import getRandomColor from '../utils/getRandomColor'


const MainStore = types
  .model('MainStore', {
    boxes: types.array(BoxModel),
    cursorPosition: types.optional(CursorPointerModel, { x: 0, y: 0 })
  })
  .actions((self) => {
    return {
      addBox (box) {
        self.boxes.push(box)
      },
      removeBox (box) {
        self.boxes.remove(box)
      }
    }
  })
  .views((self) => ({}))

const store = MainStore.create()

const box1 = BoxModel.create({
  id: uuid(),
  color: getRandomColor(),
  left: 0,
  top: 0
})

store.addBox(box1)

export default store
