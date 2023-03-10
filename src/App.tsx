import React, { useEffect } from "react"
import { useAppSelector } from './ui/hooks'

import $ from "../styles/App.module.css"
import Section from "./ui/components/Section/Section"
import JobList from "./ui/components/JobList/JobList"
import useWorker from "./ui/hooks/useWorker"
import useJob from "./ui/hooks/useJob"

function App() {

  const { fetchJobs } = useJob()

  const { fetchWorker }  = useWorker();

  const { currentWorkerId } = useAppSelector(state => state.worker)

  const { matchedJobs } = useAppSelector(state => state.job)

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
      </Section>
    </main>
  );
}

export default App;
