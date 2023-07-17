import React from "react";

export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: React.FC<IInput> = (props) => {
  const inputProps = { ...props };
  delete inputProps.className;

  return (
    <input
      {...inputProps}
      className={`ptz-input${props.className ? ` ${props.className}` : ""}`}
    />
  );
};

export default Input;
