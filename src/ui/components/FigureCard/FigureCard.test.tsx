import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import FigureCard from './FigureCard'

test('FigureCard rendering with figures', () => {
  const props = {
    figures: [
      {
        id: 'distance',
        name: 'Distance',
        value: 1000,
        postfix: "miles"
      },
      {
        id: 'wage',
        name: 'Hourly Rate',
        value: 2000,
        prefix: "$"
      }
    ]
  }
  render(<FigureCard {...props}/>)
  expect(screen.getByText(/Distance/i)).toBeInTheDocument()

  expect(screen.getByText(/Hourly Rate/i)).toBeInTheDocument()

  expect(screen.getByText(/1000/i)).toBeInTheDocument()

  expect(screen.getByText(/2000/i)).toBeInTheDocument()

  expect(screen.getByText(/miles/i)).toBeInTheDocument()

  expect(screen.getByText(/\$/i)).toBeInTheDocument()
})