import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import ScrollableContainer from './ScrollableContainer'

test('JobList rendering with string list', () => {
  render(<ScrollableContainer>
    <div>test1</div>
    <div>test2</div>
    <div>test3</div>
    <div>test4</div>
    <div>test5</div>
  </ScrollableContainer>)

  expect(screen.getByText(/test1/i)).toBeInTheDocument()

  expect(screen.getByText(/test2/i)).toBeInTheDocument()

})