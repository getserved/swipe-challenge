import React, { FC } from "react";

import $ from "./InfoCard.module.css";
import type { Info } from "../../../core/types"
import LazyIcon, { IconType } from "../LazyIcon/LazyIcon"
import ScrollableContainer from "../ScrollableContainer/ScrollableContainer"

interface InfoCardProps{
  icon: IconType,
  title: string,
  list?: (string | Info)[],
  hasArrow?: boolean
}

const InfoCard: FC<InfoCardProps> = ({
    icon, 
    title,
    list,
    hasArrow = false
}) => {

    // conditionally transfer info into string or object 
    const getInfo = (info: string | Info) => {
        if (typeof(info) === 'string') {
            return {info}
        } else {
            return {info: info.text, className: info.className}
        }
    }

    return (
    <div className={$.infoCard}>
        <div className={$.infoCardWrapper}>
            <div className={$.infoCardIcon}>
                <LazyIcon icon={icon}/>
            </div>
            <div className={$.infoCardContent}>
                <div className={$.infoCardContentWrapper}>
                    <h4>{title}</h4>        
                    <ScrollableContainer className={$.infoCardInfoWrapper}>
                        {list && list.map((i, k) => {
                            const info = getInfo(i)
                            return(
                                <div key={`info_${title}_${k}`} className={info.className? info.className: ''}>
                                    { info.info }
                                </div>
                            )}
                        )}
                    </ScrollableContainer>
                </div>
            </div>
            {hasArrow && <LazyIcon className={$.infoArrow} icon={IconType.ARROW_RIGHT}/>}
        </div>
    </div>
  );
};

export default InfoCard;


