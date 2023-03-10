import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button, { ButtonType, ButtonVariant } from './Button'

test('Button rendering with children', () => {
  render(<Button>Test</Button>)
  expect(screen.getByText(/Test/i)).toBeInTheDocument()
})

test('Button rendering with default variant', () => {
  render(<Button>Test</Button>)
  const button = screen.getByRole('button');
  expect(button.getAttribute('variant')).toBe(null)
})

test('Button rendering with given variant', () => {
  const props = {
    variant: ButtonVariant.PRIMARY
  }
  const container = render(<Button {...props}>Test</Button>)
  const button = container.getByRole('button');
  expect(button.getAttribute('class')).toContain("primary")
})

test('Button rendering with given type', () => {
  const props = {
    type: ButtonType.RESET
  }
  const container = render(<Button {...props}>Test</Button>)
  const button = container.getByRole('button');
  expect(button.getAttribute('type')).toBe(props.type)
})