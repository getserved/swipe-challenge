import { screen, render, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import InfoCard from './InfoCard'
import {IconType} from "../LazyIcon/LazyIcon"

test('InfoCard rendering with string list', async () => {
  const props = {
    icon: IconType.CALENDAR, 
    title: 'test',
    list: ['line1', 'line2'],
    hasArrow: false
  }
  await act( async () => {
    render(<InfoCard {...props}/>)
  })
  expect(screen.getByText(/test/i)).toBeInTheDocument()

  expect(screen.getByText(/line1/i)).toBeInTheDocument()

  expect(screen.getByText(/line2/i)).toBeInTheDocument()
})

test('InfoCard rendering with object list', async () => {
  const props = {
    icon: IconType.CALENDAR, 
    title: 'object list',
    list: [{text:'line1', className:'test1'}, {text:'line2', className:'test2'}],
    hasArrow: false
  }
  await act( async () => {
    render(<InfoCard {...props}/>)
  })
  expect(screen.getByText(/object list/i)).toBeInTheDocument()

  expect(screen.getByText(/line1/i)).toBeInTheDocument()

  expect(screen.getByText(/line2/i)).toBeInTheDocument()

  expect(screen.getByText(/line1/i).getAttribute('class')).toContain('test1')

  expect(screen.getByText(/line2/i).getAttribute('class')).toContain('test2')
})