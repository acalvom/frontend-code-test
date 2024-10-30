import { types } from 'mobx-state-tree'

export const BoxModel = types
  .model('Box', {
    id: types.identifier,
    width: 200,
    height: 100,
    color: '#FFF000',
    left: 200,
    top: 100,
  })
  .views((self) => ({}))
  .actions((self) => ({}))
