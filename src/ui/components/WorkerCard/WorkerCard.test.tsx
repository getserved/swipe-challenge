import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import WorkerCard from './WorkerCard'
import { act } from 'react-dom/test-utils'

test('WorkerCard rendering with children', async () => {
  const props = {
    worker: {
      address:{formattedAddress: '1 Downing St, Chicago, IL 60654, USA', zoneId: 'America/Chicago'},
      email: "jim.rose@gmail.com",
      firstName: "Jim",
      lastName: "Rose",
      maxJobDistance: 20, 
      phoneNumber: "5096290220",
      workerId: "7f90df6e-b832-44e2-b624-3143d428001f"
    }
  }
  await act(() => {
    render(<WorkerCard {...props}/>)
  })

  expect(screen.getByText(/jim.rose@gmail.com/i)).toBeInTheDocument()
  expect(screen.getByText("(509)6290220")).toBeInTheDocument()
  expect(screen.getByText(/20 miles/i)).toBeInTheDocument()
  expect(screen.getByText(/1 Downing St, Chicago, IL 60654, USA/i)).toBeInTheDocument()
})