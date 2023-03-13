import React, { FC } from "react";

import $ from "./WorkerCard.module.css";
import type { Worker } from "../../../core/types"
import LazyIcon, { IconType } from "../LazyIcon/LazyIcon"
import { transformPhone } from "../../../core/models/models"

interface WorkerCardProps{
    worker: Worker
}

const WorkerCard: FC<WorkerCardProps> = ({
    worker
}) => {
    return (
    <div className={$.workerCard}>
        <div className={$.item}>
            <div className={$.icon}><LazyIcon icon={IconType.EMAIL}/></div>
            <div>{worker.email}</div>
        </div>
        <div className={$.item}>
            <div className={$.icon}><LazyIcon icon={IconType.PHONE}/></div>
            <div>{transformPhone(worker.phoneNumber)}</div>
            </div>
        <div className={$.item}>
            <div className={$.icon}><LazyIcon icon={IconType.LOCATION}/></div>
             <div>{worker.address.formattedAddress}</div>
        </div>
        <div className={$.item}>
            <div className={$.icon}><LazyIcon icon={IconType.DISTANCE}/></div>
             <div>{worker.maxJobDistance} miles</div>
        </div>
    </div>
  );
};

export default WorkerCard;


