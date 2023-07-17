import React, { useState, useEffect, useContext } from 'react';
import CharacterContext from '../context/characters/CharactersContext';
import CharactersSection from '../components/organisms/CharactersSection';
import { ICharacter } from '../types/CharactersContext';

const Favorites: React.FC = () => {
  const {
    state: { characters }
  } = useContext(CharacterContext);
  const [favorites, setFavorites] = useState<ICharacter[]>([]);

  useEffect(() => {
    const favoritesResult = characters.flatMap((character) =>
      character.favorite ? [character] : []
    ) as ICharacter[];
    setFavorites(favoritesResult);
  }, [characters]);

  return (
    <div>
      <CharactersSection characters={favorites} />
    </div>
  );
};

export default Favorites;
