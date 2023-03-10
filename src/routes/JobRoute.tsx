import React, { FC, useEffect } from "react";
import Image from "next/image"

import Section from "../ui/components/Section/Section"
import Job from "../ui/components/Job/Job"
import { useAppSelector } from "../ui/hooks";
import useJob from "../ui/hooks/useJob";

interface JobRouteProps {
  jobId?: string
}

const JobRoute: FC<JobRouteProps> = ({
  jobId
}) => {

  const { selectedJob } = useAppSelector(state => state.job)

  const { select: selectJob } = useJob()

  useEffect(() => {
      if(jobId) selectJob(jobId.toString())
  }, [])
 
  return (
    <main>
      <Section className="relative">
        {selectedJob && <Job job={selectedJob}/>}
      </Section>
    </main>
  );
}

export default JobRoute;
