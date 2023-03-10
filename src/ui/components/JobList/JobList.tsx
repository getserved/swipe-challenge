import React, { FC, useEffect, useCallback } from "react";
import Router from "next/router"

import Card from "../Card/Card";
import type { Job } from "../../../core/types"


interface WorkerProps{
  jobs: Job[],
  onSelect?: (id: string) => void;
}

const Layout: FC<WorkerProps> = ({
  jobs,
  onSelect
}) => {

  // cache call back for onSelect handler
  const handleSelect = useCallback(
    (id: string) => {
      Router.push(`/job/${id}`)
    },
    [onSelect]
  );
    return (
    <>
     <ul>
      {jobs && jobs.map(job => {
        return (
          <li className="block m-2" key={job.jobId}>
            <Card id={job.jobId} headline={job.jobTitle.name} imgSrc={job.jobTitle.imageUrl} title={job.company.name} onSelect={handleSelect}/>
          </li>
      )})}
     </ul>

    </>
  );
};

export default Layout;


