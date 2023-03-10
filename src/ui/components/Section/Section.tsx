import React, { FC } from "react";
import cx from "classnames";

import $ from "./Section.module.css";
import classNames from "classnames";


export enum SectionType {
  LIGHT = 'light',
  DARK = 'dark'
}

interface SectionProps {
  children: React.ReactNode
  className?: string
  variant?: SectionType
}

const Section: FC<SectionProps> = ({ children, className, variant = SectionType.LIGHT }) => {
  return (
    <section
      data-testid="section"
      className={cx(className, $.section, {
        [$.light]: variant === SectionType.LIGHT,
        [$.dark]: variant === SectionType.DARK,
      })}
    >
      {children}
    </section>
  );
};

export default Section;
