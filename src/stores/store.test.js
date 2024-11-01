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
    expect(store.selectedBoxes).toStrictEqual([])
    expect(store.boxes[0].name).toBe('Box 1')
  })

  it('should add a new box', () => {
    store.addBox('New Box', 50, 50)
    expect(store.boxes.length).toBe(2)
    expect(store.boxes[1].name).toBe('New Box')
    expect(store.boxes[1].left).toBe(50)
    expect(store.boxes[1].top).toBe(50)
  })

  it('should select a box', () => {
    const box = store.boxes[0]
    store.selectBox(box)
    expect(store.selectedBoxes).toContain(box)
  })

  it('should not remove box when no selected boxes', () => {
    store.removeSelection()
    expect(store.boxes.length).toBe(1)
  })

  it('should remove a single selected box', () => {
    const box = store.boxes[0]
    store.selectBox(box)
    store.removeSelection()
    expect(store.boxes.length).toBe(0)
  })

  it('should remove selected boxes', () => {
    store.addBox('Box 2', 50, 50)

    const [box1, box2] = store.boxes
    store.selectBox(box1)
    store.selectBox(box2)
    store.removeSelection()
    expect(store.boxes.length).toBe(0)
  })

  it('should clear selection', () => {
    const box = store.boxes[0]
    store.selectBox(box)
    store.clearSelection(box)
    expect(store.selectedBoxes).toStrictEqual([])
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
    jest.spyOn(store, 'saveToLocalStorage')

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
