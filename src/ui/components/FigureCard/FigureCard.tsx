import React, { FC, useEffect, useMemo } from "react";
import { useAppSelector } from '../../hooks'
import Router from "next/router"
import cx from "classnames"
import Image from "next/image"

import $ from "./FigureCard.module.css";
import type {Figure} from "../../../core/types"

interface FigureCardProps{
  figures: Figure[],
}

const FigureCard: FC<FigureCardProps> = ({
    figures
}) => {
    return (
    <div className={$.figureCard}>
        {figures && figures.map(figure => {
            return (
                <div key={figure.id} className={$.figureCardContent}>
                    <div className={$.figureCardName}>{figure.name}</div>
                    <div className={$.figureCardFigureContent}>
                        {figure.prefix && <span className={$.figureCardPrefix}>{figure.prefix}</span>}
                        <span className={$.figureCardFigure}>{figure.value}</span>
                        {figure.postfix && <span className={$.figureCardPostfix}>{figure.postfix}</span>}
                    </div>
                </div>
            )})}
    </div>
  );
};

export default FigureCard;


