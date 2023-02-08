import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, screen } from '@testing-library/react'
import Toggleable from './Toggleable'

describe.skip('<Toggleable />', () => {
  const buttonLabel = 'show'
  render(<Toggleable />)
  beforeEach(() => {
    <Toggleable buttonLabel={buttonLabel}><div>testDivContent</div></Toggleable>
  })

  test('render its children', () => {
    screen.getByText('testDivContent')
  })

  test('renders its children but they are not visible', () => {
    const el = screen.getByText('testDivContent')
    expect(el.parentNode).toHaveStyle('display: none')
  })

  test('after clicking its children must be shown', () => {
    const button = screen.getByText(buttonLabel)
    fireEvent.click(button)
    const el = screen.getByText('testDivContent')
    expect(el.parentNode).not.toHaveStyle('display: none')
  })

  test('toggled content can be closed', () => {
    const button = screen.getByText(buttonLabel)
    fireEvent.click(button)

    const el = screen.getByText('testDivContent')
    expect(el.parentNode).not.toHaveStyle('display: none')

    const cancelButton = screen.getByText('Cancel')
    fireEvent.click(cancelButton)

    expect(el.parentNode).toHaveStyle('display: none')
  })
})
