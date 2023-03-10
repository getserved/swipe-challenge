import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Job from './Job'
import { renderWithProviders } from '../../../utils/testUtils'
import { set, reset, fetchJobs, actionJob, select } from "../../../core/reducers/JobSlice"

const props = {
  job: {
    jobId: "5775d8e18a488e6c5bb08333",
    jobTitle: {
      name: "Construction General Helper",
      imageUrl: "https://imgs.swipejobs.com/js/job-category/construction-1.jpg"
    },
    company: {
      name: "Steve Smith Construction",
      address: {
        formattedAddress: "430 Smith St, Chicago, IL 60654, USA",
        zoneId: "America/Chicago"
      },
      reportTo: {
        name: "Judy Smith",
        phone: "2130010012"
      }
    },
    wagePerHourInCents: 950,
    milesToTravel: 3.4,
    shifts: [
      {
        startDate: "2019-09-04T21:00:00Z",
        endDate: "2019-09-05T05:00:00Z"
      }
    ],
    branch: "Downtown",
    branchPhoneNumber: "2531233322"
  }
}

test('Job rendering with init state', () => {
  renderWithProviders(<Job {...props}/>)

  expect(screen.getByText(/Construction General Helper/i)).toBeInTheDocument()

  expect(screen.getByText(/Steve Smith Construction/i)).toBeInTheDocument()

  expect(screen.getByText(/430 Smith St, Chicago, IL 60654, USA/i)).toBeInTheDocument()

  expect(screen.getByText(/Judy Smith/i)).toBeInTheDocument()

  expect(screen.getByText('THU, SEP 5, 7:00 AM - 7:00 AM GMT+10')).toBeInTheDocument()

  expect(screen.getByText('3.4 miles from your job search location')).toBeInTheDocument()

  expect(screen.getByText('Judy Smith (213)0010012')).toBeInTheDocument()
})

test('Click event on buttons', async () => {
  const {store} = renderWithProviders(<Job {...props}/>)
    const state = store.getState().job
    const mockJobId = '5775d8e18a488e6c5bb08c13'
    
    await store.dispatch(fetchJobs)
    await store.dispatch(select(mockJobId))
    await store.dispatch(actionJob('accept'))

    setTimeout(() => {
      expect(state.selectedJob?.success).toEqual(true)
    },500)
})