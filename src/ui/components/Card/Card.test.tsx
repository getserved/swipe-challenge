import { fireEvent, screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Card from './Card'

test('Card rendering with children', () => {
  const props = {
    id: "1",
    headline:"headline",
    title:"title",
    imgSrc:""
  }
  render(<Card {...props}/>)
  expect(screen.getByText(/headline/i)).toBeInTheDocument()

  expect(screen.getByText(/title/i)).toBeInTheDocument()
})

test('Card with click event', () => {
  let test = ""
  const props = {
    id: "1",
    headline:"headline",
    title:"title",
    imgSrc:"",
    onSelect: (id: string) => {
      test = id
    }
  }
  const {container} = render(<Card {...props}>Test</Card>)
  const div = container.firstChild
  if (div) {
    fireEvent.click(div)
    expect(test).toBe(props.id)
  }
})