import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
// import { prettyDOM } from "@testing-library/react";
import Note from './Note'

test('renders content', () => {
  const note = {
    content: 'testing',
    important: true
  }

  const mockHandler = jest.fn()
  const view = render(<Note note={note} toggleImportance={mockHandler} />)
  view.getByText('testing')
  expect(view.container).toHaveTextContent(note.content)

  // view.debug()
  // const li = view.container.querySelector('li')
  // console.log(prettyDOM(li))
  const button = view.getByText('make not important')
  fireEvent.click(button)

  expect(mockHandler).toHaveBeenCalledTimes(1)
})
