import React, { useState } from "react";
import Link from 'next/link'

import $ from "./Header.module.css";
import { useAppSelector } from "../../hooks";
import Logo from "../../../images/logo"
import WorkerCard from "../WorkerCard/WorkerCard";

const Header = () => {

  const { worker } = useAppSelector(state => state.worker)

  const [showWorker, setShowWorker] = useState(false)

  const handleUserClick = () => {   
    setShowWorker(showWoker => !showWoker)
  }

  const handleUserKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === ' ')
      setShowWorker(showWoker => !showWoker)
  }

  return (
    <header className={`${$.header} flex flex-row justify-between px-2 sm:px-8 py-1 sm:py-4 h-10 sm:h-20`}>
        <div className="w-3/4">
          <Link className="flex h-full p-1" href="/" ><Logo className=""/></Link>
        </div>
        <ul className="flex justify-end flex-1 my-auto text-right">
            <li className={$.action}>
                <Link href="#" onClick={() => handleUserClick()} onKeyDown={(e) => handleUserKeyDown(e)}>{`${worker?worker.firstName:undefined} ${worker?worker.lastName:undefined}` || 'User'}</Link>
            </li>
        </ul>
        {showWorker && worker && 
          <div className={$.workerCardWrapper}>
            <WorkerCard worker={worker} />
          </div>
        }
    </header>
  );
};

export default Header;
