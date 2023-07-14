import React from "react";
import Image from "../atom/Image";
import { ICharacter } from "../../types/CharacterContext";

type Props = {
  character: ICharacter;
};

const CharacterItem: React.FC<Props> = ({ character }) => (
  <div className="ptz-character-item">
    <div className="ptz-character-item__img-container">
      <Image
        src={character.image}
        alt={character.name}
        className="ptz-character-item__img"
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

export default CharacterItem;
