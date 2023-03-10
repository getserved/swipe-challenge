import React, { FC } from "react";
import dynamic from 'next/dynamic'

import $ from "./InfoCard.module.css";

export enum IconType {
    CALENDAR = 'calendar',
    LOCATION = 'location',
    TOOLS = 'tools',
    PERSON = 'person',
    ARROW_RIGHT = 'arrow_right'
}

interface LazyIconProps {
    icon: IconType,
    className?: string
}

const LazyIcon: FC<LazyIconProps> = ({
    icon, 
    className
}) => {

    // Load Icon dynamically by async import
    async function loadIcon(iconName: IconType) {
        switch (iconName) {
            case IconType.CALENDAR:
                const { BsFillCalendar2WeekFill } = await import('react-icons/bs');
                return BsFillCalendar2WeekFill

            case IconType.LOCATION:
                const { ImLocation2 } = await import('react-icons/im');
                return ImLocation2

            case IconType.TOOLS:
                const { BsTools } = await import('react-icons/bs');
                return BsTools

            case IconType.PERSON:
                const { BsPersonCircle } = await import('react-icons/bs');
                return BsPersonCircle

            case IconType.ARROW_RIGHT:
                const { MdArrowForwardIos } = await import('react-icons/md');
                return MdArrowForwardIos
        
        }
    }

    // generate dynamic Componnet for lazy loading SVGs
    const LazyIcon = ({icon, className}: LazyIconProps) => {
        const IconComp = dynamic(() => loadIcon(icon), { ssr: false });
        return <IconComp className={className}/>
    }

    return (
        <LazyIcon icon={icon} className={className} />
    )
};

export default LazyIcon