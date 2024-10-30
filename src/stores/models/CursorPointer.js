import { types } from 'mobx-state-tree'

export const CursorPointerModel = types
  .model('CursorPointer', {
    x: types.number,
    y: types.number
  })
  .actions((self) => {
    return {
      setCursorPosition (x, y) {
        self.x = x
        self.y = y
      }
    }
  })

