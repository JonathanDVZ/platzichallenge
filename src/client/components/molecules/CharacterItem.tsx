import React, { memo, Dispatch } from 'react';
import { toggleFavorite } from '../../context/characters/CharactersActions';
import Image from '../atoms/Image';
import FavoriteButton from '../atoms/FavoriteButton';
import { ICharacter, IAction } from '../../types/CharactersContext';
import { isEqual } from 'lodash';

export type Props = {
  character: ICharacter;
  dispatch: Dispatch<IAction>;
};

const CharacterItem: React.FC<Props> = ({ character, dispatch }) => (
  <div className="ptz-character-item">
    <div className="ptz-character-item__img-container">
      <Image src={character.image} alt={character.name} className="ptz-character-item__img" />
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

const compareProps = ({ character: prevCharacter }: Props, { character: nextCharacter }: Props) =>
  isEqual(prevCharacter, nextCharacter);

export default memo(CharacterItem, compareProps);
