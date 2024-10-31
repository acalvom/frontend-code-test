import { createMainStore } from './models/MainStore'

export const store = createMainStore()
store.addBox('Box 1', 0, 0)
