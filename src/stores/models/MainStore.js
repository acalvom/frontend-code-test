import { types } from 'mobx-state-tree'
import { UndoManager } from 'mst-middlewares'
import { CursorPointerModel } from './CursorPointer'
import { BoxModel } from './Box'
import { MainStoreActions } from '../actions/MainStoreActions'

const MainStore = types
  .model('MainStore', {
    boxes: types.array(BoxModel),
    cursorPosition: types.optional(CursorPointerModel, { x: 0, y: 0 }),
    selectedBoxes: types.array(types.reference(BoxModel)),
    history: types.optional(UndoManager, {}),
  })

  .actions((self) => {
    const actions = MainStoreActions(self)
    const { setupActionListener, initializeStore } = actions
    const setUndoManager = () => (undoManager = self.history)

    return {
      ...actions,
      afterCreate() {
        initializeStore()
        setUndoManager()
        setupActionListener()
      },
    }
  })

export let undoManager = {}
export const createMainStore = () => MainStore.create()
