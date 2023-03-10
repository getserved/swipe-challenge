import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import LazyIcon, {IconType} from './LazyIcon'

test('LazyIcon rendering arrow', async () => {
  const {container} = render(<LazyIcon icon={IconType.ARROW_RIGHT}/>)
  setTimeout(() => {
    const svg = container.querySelector("svg")
    expect(svg).toBeInTheDocument()
  }, 0)
})

test('LazyIcon rendering calendar', async () => {
  const {container} = render(<LazyIcon icon={IconType.CALENDAR}/>)
  setTimeout(() => {
    const svg = container.querySelector("svg")
    expect(svg).toBeInTheDocument()
  }, 0)
})

test('LazyIcon rendering location', async () => {
  const {container} = render(<LazyIcon icon={IconType.LOCATION}/>)
  setTimeout(() => {
    const svg = container.querySelector("svg")
    expect(svg).toBeInTheDocument()
  }, 0)
})

test('LazyIcon rendering person', async () => {
  const {container} = render(<LazyIcon icon={IconType.PERSON}/>)
  setTimeout(() => {
    const svg = container.querySelector("svg")
    expect(svg).toBeInTheDocument()
  }, 0)
})

test('LazyIcon rendering tools', async () => {
  const {container} = render(<LazyIcon icon={IconType.TOOLS}/>)
  setTimeout(() => {
    const svg = container.querySelector("svg")
    expect(svg).toBeInTheDocument()
  }, 0)
})