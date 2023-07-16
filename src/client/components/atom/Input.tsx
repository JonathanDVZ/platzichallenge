import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: React.FC<Props> = (props) => {
  const inputProps = { ...props };
  delete inputProps.className;

  return <input {...inputProps} className={`ptz-input ${props.className}`} />;
};

export default Input;
