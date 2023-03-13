import { fireEvent, screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Header from './Header'
import { renderWithProviders } from "../../../utils/testUtils"

test('Header rendering', async () => {
  renderWithProviders(<Header></Header>)
  expect(screen.getByText(/Jim Rose/i)).toBeInTheDocument()
})

test('Click on logo', async () => {
  const { getByRole } = renderWithProviders(<Header></Header>)
  const link = getByRole('link', {name: ''})
  fireEvent.click(link)
  expect(window.location.pathname).toBe('/');

})