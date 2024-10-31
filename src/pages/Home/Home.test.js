import React from 'react'
import { Home } from './Home'
import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('should display a single box', () => {
    render(<Home />)

    const box = screen.getByText('Box 1')
    expect(box).toBeInTheDocument()
  })

  it('should add a box in the canvas', () => {
    render(<Home />)

    const canvas = screen.getByLabelText('canvas')
    expect(canvas).toBeInTheDocument()

    userEvent.click(canvas)

    const addBoxButton = screen.getByText('Add Box')
    expect(addBoxButton).toBeInTheDocument()

    userEvent.click(addBoxButton)

    const box = screen.getByText('Box 2')
    expect(box).toBeInTheDocument()
  })
})
