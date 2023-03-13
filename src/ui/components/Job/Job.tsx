import React, { FC, useMemo } from "react";
import Router from "next/router"
import Image from "next/image"

import $ from "./Job.module.css";
import Button from "../Button/Button";
import type { Job } from "../../../core/types"
import FigureCard from "../FigureCard/FigureCard";
import InfoCard from "../InforCard/InfoCard";
import { IconType } from "../LazyIcon/LazyIcon";
import { 
  transformFigures, 
  transformShifts, 
  transformAddress,
  transformRequirements,
  transformReportTo 
} from "../../../core/models/models";
import useJob from "../../hooks/useJob"
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import {ButtonVariant} from "../Button/Button"

interface JobProps{
  job: Job
}

const Layout: FC<JobProps> = ({
  job
}) => {

  // cache transformed figures
  const figures = useMemo(() => {
    return transformFigures(job)
  }, [job.milesToTravel, job.wagePerHourInCents])

  // cache transformed shifts
  const shifts = useMemo(() => {
    return transformShifts(job.shifts)
  }, [job.shifts])

  // cache transformed address
  const address = useMemo(() => {
    return transformAddress(job.company.address.formattedAddress, job.milesToTravel)
  }, [job.company.address.formattedAddress, job.milesToTravel])

  // cache transformed requirements
  const requirements = useMemo(() => {
    return transformRequirements(job.requirements)
  }, [job.requirements])

  // cache transformed reportTo
  const reportTo = useMemo(() => {
    return transformReportTo(job.company.reportTo)
  }, [job.company.reportTo])

  const {accept: acceptJob, reject: rejectJob} = useJob()

  // handle accept button click
  const handleAcceptAction = () => {
    acceptJob()
  }

  // handle reject button click
  const handleRejectAction = () => {
    rejectJob()
    Router.push("/")
  }

  // handle more jobs button click
  const handleMoreJobs = () => {
    Router.push("/")
  }

    return (
      <div className={$.job}>
        <div className={$.jobContent}>
          {job && <div className={$.jobImg}><Image  fill alt="matched job image" src={job?.jobTitle.imageUrl} /></div>}
          <div className={$.jobTitle}>
            <h2>{job.jobTitle.name}</h2>
            <h4>{job.company.name}</h4>
          </div>
          <div className={$.jobFigures}>
            <FigureCard figures={figures} />
          </div>
          <div className={$.jobInfoContainer}>
            <InfoCard icon={IconType.CALENDAR} title="Shift Dates" list={shifts} />
            <InfoCard icon={IconType.LOCATION} hasArrow title="Location" list={address} />
            <InfoCard icon={IconType.TOOLS} title="Requirements" list={requirements} />
            <InfoCard icon={IconType.PERSON} title="Report To" list={reportTo} />
          </div>
        </div>
        {job.success && <div className={`${$.jobTaken} ${$.jobInfoActions}`}>
          <Button className={$.actionBtn} onClick={handleMoreJobs}>More Jobs</Button>
        </div>}
        {!job.success && <div className={$.jobInfoActions}>
          <Button className={$.actionBtn} variant={ButtonVariant.SECONDARY} onClick={handleRejectAction}>No Thanks</Button>
          <Button className={$.actionBtn} onClick={handleAcceptAction}>{`I'll Take it`}</Button>
        </div>
        }
        {(job.errors || job.success) &&<div className={$.jobStatus}>
          {job.success && <span className={$.jobSuccess}>You have taken this job successfully</span>}
          {job.errors && <ErrorMessage>{ job.errors }</ErrorMessage>}
        </div>
        }
        
      </div>
  );
};

export default Layout;


