import React, { useContext } from "react";
import CharacterContext from "../../context/CharacterContext";
import { toggleFavorite } from "../../context/CharacterActions";
import Image from "../atom/Image";
import FavoriteButton from "../atom/FavoriteButton";
import { ICharacter } from "../../types/CharacterContext";

type Props = {
  character: ICharacter;
};

const CharacterItem: React.FC<Props> = ({ character }) => {
  const { state, dispatch } = useContext(CharacterContext);

  return (
    <div className="ptz-character-item">
      <div className="ptz-character-item__img-container">
        <Image
          src={character.image}
          alt={character.name}
          className="ptz-character-item__img"
        />
        <FavoriteButton
          onClick={() => toggleFavorite(dispatch, character)}
          favorite={character.favorite}
        />
      </div>
      <div className="ptz-character-item__info-container">
        <p className="ptz-character-item__info--title">{character.name}</p>
        <p className="ptz-character-item__info">
          <strong>Gender: </strong>
          {character.gender}
        </p>
        <p className="ptz-character-item__info">
          <strong>Occupation: </strong>
          {character.occupation}
        </p>
        <p className="ptz-character-item__info">
          <strong>Status: </strong>
          {character.status}
        </p>
      </div>
    </div>
  );
};

export default CharacterItem;
