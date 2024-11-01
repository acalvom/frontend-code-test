import { getSnapshot, applySnapshot } from 'mobx-state-tree'
import { createMainStore } from './models/MainStore'
import { MainStoreKey } from './actions/MainStoreActions'

describe('MainStore', () => {
  let store

  beforeEach(() => {
    store = createMainStore()
    localStorage.clear()
  })

  afterEach(() => {
    jest.restoreAllMocks()
    localStorage.clear()
  })

  it('should initialize with a default box when localStorage is empty', () => {
    expect(store.boxes.length).toBe(1)
    expect(store.cursorPosition.x).toBe(0)
    expect(store.cursorPosition.y).toBe(0)
    expect(store.selectedBox).toBeNull()
    expect(store.boxes[0].name).toBe('Box 1')
  })

  it('should add a new box', () => {
    store.addBox('New Box', 50, 50)
    expect(store.boxes.length).toBe(2)
    expect(store.boxes[1].name).toBe('New Box')
    expect(store.boxes[1].left).toBe(50)
    expect(store.boxes[1].top).toBe(50)
  })

  it('should remove a box', () => {
    const box = store.boxes[0]
    store.removeBox(box)
    expect(store.boxes.length).toBe(0)
  })

  it('should select a box', () => {
    const box = store.boxes[0]
    store.selectBox(box)
    expect(store.selectedBox).toBe(box)
  })

  it('should clear selection', () => {
    const box = store.boxes[0]
    store.selectBox(box)
    store.clearSelection()
    expect(store.selectedBox).toBeNull()
  })

  it('should persist and restore state from localStorage', () => {
    store.addBox('Persistent Box', 100, 100)
    store.saveToLocalStorage()

    const newStore = createMainStore()
    newStore.initializeStore()
    expect(newStore.boxes.length).toBe(2)
    expect(newStore.boxes[1].name).toBe('Persistent Box')
  })

  it('should handle action listeners properly', () => {
    jest.spyOn(store, 'saveToLocalStorage' )

    const newStore = createMainStore()
    newStore.initializeStore()

    expect(localStorage.getItem(MainStoreKey)).toContain('Box 1')
  })

  it('should take and apply snapshots', () => {
    store.addBox('Snapshot Box', 40, 40)
    const snapshot = getSnapshot(store)

    const newStore = createMainStore()
    applySnapshot(newStore, snapshot)

    expect(newStore.boxes.length).toBe(2)
    expect(newStore.boxes[1].name).toBe('Snapshot Box')
  })
})
