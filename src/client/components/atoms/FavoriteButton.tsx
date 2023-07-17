import React from "react";

export interface IFavoriteButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  favorite?: boolean;
}

const FavoriteButton: React.FC<IFavoriteButton> = ({ onClick, favorite }) => (
  <button
    className="ptz-favorite-button"
    aria-label="favorite"
    onClick={onClick}>
    <span
      className={`ptz-favorite-button__icon${
        favorite ? " ptz-favorite-button__icon--red" : ""
      }`}></span>
  </button>
);

export default FavoriteButton;
