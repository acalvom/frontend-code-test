import React from 'react'
import { renderHook } from '@testing-library/react-hooks'
import { useDraggableBox } from './useDraggableBox'
import interact from 'interactjs'

jest.mock('interactjs')

describe('useDraggableBox', () => {
  const setup = () => {
    const boxRef = { current: <div></div> }
    const box = {
      left: 0,
      top: 0,
      move: jest.fn(),
    }

    interact.mockReturnValue({
      draggable: jest.fn(({ listeners }) => {
        listeners.move({ dx: 10, dy: 15 })
      }),
      unset: jest.fn(),
    })

    return { box, boxRef }
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should call move listener', () => {
    const { box, boxRef } = setup()

    renderHook(() => useDraggableBox(boxRef, box))

    expect(box.move).toHaveBeenCalledWith(10, 15)
  })

  it('should clean hook when unmount', () => {
    const { box, boxRef } = setup()
    const { unmount } = renderHook(() => useDraggableBox(boxRef, box))

    expect(interact).toHaveBeenCalledWith(boxRef.current)

    unmount()
    expect(interact().unset).toHaveBeenCalled()
  })
})
