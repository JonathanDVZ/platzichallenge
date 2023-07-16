import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  iconComponent: React.ReactNode;
}

const ButtonWithIcon: React.FC<Props> = (props) => {
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
