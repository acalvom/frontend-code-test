import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Home } from './Home'
import { Canvas, Toolbar } from '../../components'
import { storeSetup } from '../../test/storeSetup'

function customRender(ui, { initialState, ...renderOptions } = {}) {
  const store = storeSetup(initialState)

  function Wrapper() {
    return (
      <>
        <Toolbar store={store} />
        <Canvas store={store} />
      </>
    )
  }

  return render(ui, { wrapper: Wrapper, ...renderOptions })
}

describe('Home', () => {
  afterEach(() => {
    localStorage.clear()
    cleanup()
  })

  it('should display a single box', () => {
    customRender(<Home />)

    const box = screen.getByText('Box 1')
    expect(box).toBeInTheDocument()
  })

  it('should add a box in the canvas', () => {
    customRender(<Home />)

    const canvas = screen.getByLabelText('canvas')
    expect(canvas).toBeInTheDocument()

    userEvent.click(canvas)

    const addBoxButton = screen.getByText('Add Box')
    expect(addBoxButton).toBeInTheDocument()

    userEvent.click(addBoxButton)

    const box = screen.getByText('Box 2')
    expect(box).toBeInTheDocument()
  })

  it('should remove a box in the canvas', async () => {
    customRender(<Home />)

    const canvas = screen.getByLabelText('canvas')
    expect(canvas).toBeInTheDocument()

    userEvent.click(canvas)

    const addBoxButton = screen.getByText('Add Box')
    expect(addBoxButton).toBeInTheDocument()

    userEvent.click(addBoxButton)

    const box = screen.getByText('Box 2')
    expect(box).toBeInTheDocument()

    userEvent.dblClick(box)

    const removeBoxButton = screen.getByText('Remove Box')
    expect(removeBoxButton).toBeInTheDocument()

    userEvent.click(removeBoxButton)

    expect(screen.queryByText('Box 2')).not.toBeInTheDocument()

    const toast = await screen.findByText('The box has been removed successfully')
    expect(toast).toBeInTheDocument()
  })

  it('should remove two boxes in the canvas', () => {
    customRender(<Home />)

    const canvas = screen.getByLabelText('canvas')
    expect(canvas).toBeInTheDocument()

    const box1 = screen.getByText('Box 1')
    expect(box1).toBeInTheDocument()

    userEvent.click(canvas)

    const addBoxButton = screen.getByText('Add Box')
    expect(addBoxButton).toBeInTheDocument()

    userEvent.click(addBoxButton)

    const box2 = screen.getByText('Box 2')
    expect(box2).toBeInTheDocument()

    const removeBoxButton = screen.getByText('Remove Box')
    expect(removeBoxButton).toBeInTheDocument()

    userEvent.dblClick(box1)
    userEvent.click(removeBoxButton)

    expect(screen.queryByText('Box 1')).not.toBeInTheDocument()

    userEvent.dblClick(screen.getByText('Box 2'))
    userEvent.click(removeBoxButton)

    expect(screen.queryByText('Box 2')).not.toBeInTheDocument()
  })

  it('should display a message when no box is selected', async () => {
    customRender(<Home />)

    const canvas = screen.getByLabelText('canvas')
    expect(canvas).toBeInTheDocument()

    userEvent.click(canvas)

    const addBoxButton = screen.getByText('Add Box')
    expect(addBoxButton).toBeInTheDocument()

    userEvent.click(addBoxButton)

    const removeBoxButton = screen.getByText('Remove Box')
    expect(removeBoxButton).toBeInTheDocument()

    userEvent.click(removeBoxButton)

    const toast = await screen.findByText('No box is selected')
    expect(toast).toBeInTheDocument()
  })

  it('should display a message when there are no boxes to remove', async () => {
    customRender(<Home />)

    const canvas = screen.getByLabelText('canvas')
    expect(canvas).toBeInTheDocument()

    const box1 = screen.getByText('Box 1')
    expect(box1).toBeInTheDocument()

    const removeBoxButton = screen.getByText('Remove Box')
    expect(removeBoxButton).toBeInTheDocument()

    userEvent.dblClick(box1)
    userEvent.click(removeBoxButton)

    expect(screen.queryByText('Box 1')).not.toBeInTheDocument()

    userEvent.click(removeBoxButton)

    const toast = await screen.findByText('There are no boxes to remove')
    expect(toast).toBeInTheDocument()
  })

  it('should disable color picker when no box is selected', async () => {
    customRender(<Home />)

    const canvas = screen.getByLabelText('canvas')
    expect(canvas).toBeInTheDocument()

    const colorInput = screen.getByRole('textbox', { type: 'color' })
    expect(colorInput).toBeInTheDocument()
    expect(colorInput).not.toBeEnabled()
  })
})
