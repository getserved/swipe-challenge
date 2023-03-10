import React, { FC, useEffect, useRef, useState } from "react";

import $ from "./ScrollableContainer.module.css";

interface ScrollableContainerProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

const ScrollableContainer: FC<ScrollableContainerProps> = ({ 
    children, 
    className
}) => {
  return (
    <div className={`${$.scrollableContainer} ${className}`}>
        {children}
    </div>
  );
};

export default ScrollableContainer;
