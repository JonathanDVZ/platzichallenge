import React from "react";

export interface IFavoriteButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  favorite?: boolean;
}
