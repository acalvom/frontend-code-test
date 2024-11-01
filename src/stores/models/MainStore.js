import { types } from 'mobx-state-tree'
import { CursorPointerModel } from './CursorPointer'
import { BoxModel } from './Box'
import { MainStoreActions } from '../actions/MainStoreActions'

const MainStore = types
  .model('MainStore', {
    boxes: types.array(BoxModel),
    cursorPosition: types.optional(CursorPointerModel, { x: 0, y: 0 }),
    selectedBox: types.maybeNull(types.reference(BoxModel)),
  })

  .actions((self) => {
    const actions = MainStoreActions(self)
    const { setupActionListener, initializeStore } = actions

    return {
      ...actions,
      afterCreate() {
        initializeStore()
        setupActionListener()
      },
    }
  })

export const createMainStore = () => MainStore.create()
