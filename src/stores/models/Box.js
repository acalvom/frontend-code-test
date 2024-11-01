import { getParent, hasParent, types } from 'mobx-state-tree'

export const BoxModel = types
  .model('Box', {
    id: types.identifier,
    name: types.string,
    width: 200,
    height: 100,
    color: '#FFF000',
    left: 200,
    top: 100,
  })
  .views((self) => ({
    get isSelected() {
      if (!hasParent(self)) return false
      const mainStore = getParent(self, 2)

      return mainStore.selectedBox === self
    },
  }))
  .actions((self) => ({
    move(left, top) {
      self.left = left
      self.top = top
    },
    changeColor(color) {
      self.color = color
    },
  }))
