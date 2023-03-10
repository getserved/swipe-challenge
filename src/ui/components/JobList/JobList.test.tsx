import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import JobList from './JobList'
const props = {
  jobs: [{
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
  ]
}

test('JobList rendering with string list', () => {
  render(<JobList {...props}/>)

  expect(screen.getByText(/Construction General Helper/i)).toBeInTheDocument()

  expect(screen.getByText(/Steve Smith Construction/i)).toBeInTheDocument()

})