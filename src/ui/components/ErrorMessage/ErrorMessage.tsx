import React, { FC } from "react";

import $ from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  children: React.ReactNode;
}


const ErrorMessage: FC<ErrorMessageProps> = ({ children }) => {
  return <div className={$.error}>{children}</div>;
};

export default ErrorMessage;
