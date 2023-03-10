import { fireEvent, screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import ErrorMessage from './ErrorMessage'

test('ErrorMessage rendering with children', () => {

  render(<ErrorMessage>Error</ErrorMessage>)
  expect(screen.getByText(/Error/i)).toBeInTheDocument()
})