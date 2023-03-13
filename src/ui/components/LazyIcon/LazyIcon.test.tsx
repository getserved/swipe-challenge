import { render, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import LazyIcon, {IconType} from './LazyIcon'

test('LazyIcon rendering arrow', async () => {
  const {container} = render(<LazyIcon icon={IconType.ARROW_RIGHT}/>)
  await act( async () => {
    setTimeout(() => {
      const svg = container.querySelector("svg")
      expect(svg).toBeInTheDocument()
    }, 500)
  })
})

test('LazyIcon rendering calendar', async () => {
  const {container} = render(<LazyIcon icon={IconType.CALENDAR}/>)
  await act( async () => {
    setTimeout(() => {
      const svg = container.querySelector("svg")
      expect(svg).toBeInTheDocument()
    }, 500)
  })
})

test('LazyIcon rendering location', async () => {
  const {container} = render(<LazyIcon icon={IconType.LOCATION}/>)
  await act( async () => {
    setTimeout(() => {
      const svg = container.querySelector("svg")
      expect(svg).toBeInTheDocument()
    }, 500)
  })
})

test('LazyIcon rendering person', async () => {
  const {container} = render(<LazyIcon icon={IconType.PERSON}/>)
  await act( async () => {
    setTimeout(() => {
      const svg = container.querySelector("svg")
      expect(svg).toBeInTheDocument()
    }, 500)
  })
})

test('LazyIcon rendering tools', async () => {
  const {container} = render(<LazyIcon icon={IconType.TOOLS}/>)
  await act( async () => {
    setTimeout(() => {
      const svg = container.querySelector("svg")
      expect(svg).toBeInTheDocument()
    }, 0)
  })
})