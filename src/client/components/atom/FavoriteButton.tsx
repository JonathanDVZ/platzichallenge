import React from "react";
import { IFavoriteButton } from "../../types/FavoriteButton";

const FavoriteButton: React.FC<IFavoriteButton> = ({ onClick, favorite }) => (
  <button
    className="ptz-favorite-button"
    aria-label="favorite"
    onClick={onClick}>
    <span
      className={`ptz-favorite-button__icon ${
        favorite && "ptz-favorite-button__icon--red"
      }`}></span>
  </button>
);

export default FavoriteButton;
