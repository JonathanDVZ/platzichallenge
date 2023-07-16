import React from "react";
import { HalfMoon, SunLight } from "iconoir-react";
import { Theme } from "./../../types/ThemeContext";

type Props = {
  themeSelected: Theme;
};

const SwitchIcon: React.FC<Props> = ({ themeSelected }) => (
  <div className="ptz-switch-icon">
    <div
      className={`ptz-switch-icon__option ${
        themeSelected === Theme.LIGHT && "ptz-switch-icon__option--light"
      }`}>
      <SunLight height={20} width={20} />
    </div>
    <div
      className={`ptz-switch-icon__option ${
        themeSelected === Theme.DARK && "ptz-switch-icon__option--dark"
      }`}>
      <HalfMoon height={20} width={20} />
    </div>
  </div>
);

export default SwitchIcon;
