import React from "react";

export type Option = {
  value: string;
  text: string;
};

export interface IDropdown
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  labelTitle?: string;
  options?: Option[];
}

const Dropdown: React.FC<IDropdown> = (props) => {
  const dropdownProps = { ...props };
  delete dropdownProps.labelTitle;
  delete dropdownProps.options;

  return (
    <div className="ptz-dropdown">
      {props.labelTitle && (
        <label htmlFor={dropdownProps.id}>{props.labelTitle}</label>
      )}
      <select {...dropdownProps} className="ptz-dropdown__select">
        {props.options &&
          props.options.map(({ value, text }, index) => (
            <option key={index} value={value}>
              {text}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Dropdown;
