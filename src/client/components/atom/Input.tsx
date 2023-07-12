import React from "react";

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (
  props
) => <input {...props} className="ptz-input" />;

export default Input;
