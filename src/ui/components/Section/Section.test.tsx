import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Section from './Section'

test('should return the initial state', () => {
    render(<Section>test</Section>)
    expect(screen.getByText(/test/i)).toBeInTheDocument()
})