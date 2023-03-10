import React, { useEffect } from "react"
import { useAppSelector } from './ui/hooks'
import Section from "./ui/components/Section/Section"
import JobList from "./ui/components/JobList/JobList"
import useWorker from "./ui/hooks/useWorker"
import useJob from "./ui/hooks/useJob"
import ErrorMessage from "./ui/components/ErrorMessage/ErrorMessage"

function App() {

  const { fetchJobs } = useJob()

  const { fetchWorker }  = useWorker();

  const { currentWorkerId } = useAppSelector(state => state.worker)

  const { matchedJobs, errors } = useAppSelector(state => state.job)

  useEffect(() => {
    fetchJobs()
  }, [])

  useEffect(() => {
    fetchWorker()
  }, [currentWorkerId])

  return (
    <main>
      <Section className="relative">
        <JobList jobs={matchedJobs} />
        {errors && <ErrorMessage>{errors}</ErrorMessage>}
      </Section>
    </main>
  );
}

export default App;
