import React, { FC, useEffect, useMemo } from "react";
import { useAppSelector } from '../../hooks'
import Router from "next/router"
import cx from "classnames"
import Image from "next/image"

import $ from "./Card.module.css";

interface CardProps{
  id: string,
  headline: string,
  title: string,
  imgSrc?: string,
  onSelect?: (id: string) => void;
}

const Card: FC<CardProps> = ({
    id,
    headline,
    title,
    imgSrc,
    onSelect
}) => {

    const handleOnClick = (e: React.MouseEvent) => {
        e.preventDefault()
        onSelect && onSelect(id)
    }

    const handleOnKeyPress = (e: React.KeyboardEvent) => {
        switch (e.key) {
            case 'Enter':
                e.preventDefault()
                onSelect && onSelect(id)
                break;
        }
    }

    return (
    <div tabIndex={0} id={`job_${id}`} className={`${$.card}`} onClick={handleOnClick} onKeyPress={handleOnKeyPress}>
        {imgSrc && <Image className={`${$.cardImg}`} fill alt="" src={imgSrc} />}
        <div className={`${$.cardContent}`}>
            <h2>{ headline }</h2>
            <h4>{ title }</h4>
        </div>
    </div>
  );
};

export default Card;


