import { fireEvent, screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Layout from './Layout'
import { renderWithProviders } from "../../../utils/testUtils"

test('Layout rendering', async () => {
  renderWithProviders(<Layout>test</Layout>)
  expect(screen.getByText(/test/i)).toBeInTheDocument()
})