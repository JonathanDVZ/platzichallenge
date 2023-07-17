import React from "react";

export interface IButtonWithIcon
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  iconComponent: React.ReactNode;
}

const ButtonWithIcon: React.FC<IButtonWithIcon> = (props) => {
  const propsWithoutIcon = { ...props };
  delete propsWithoutIcon.iconComponent;
  delete propsWithoutIcon.className;

  return (
    <button {...propsWithoutIcon} className={props.className}>
      {props.iconComponent}
    </button>
  );
};

export default ButtonWithIcon;
