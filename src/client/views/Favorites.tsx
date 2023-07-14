import React, { useState, useEffect, useContext } from "react";
import CharacterContext from "../context/CharacterContext";
import CharactersSection from "../components/organisms/CharactersSection";
import { ICharacter } from "../types/CharacterContext";

const Favorites: React.FC = () => {
  const {
    state: { characters },
  } = useContext(CharacterContext);
  const [favorites, setFavorites] = useState<ICharacter[]>([]);

  useEffect(() => {
    const favoriteResults = characters.flatMap((character) =>
      character.favorite ? [character] : []
    ) as ICharacter[];
    setFavorites(favoriteResults);
  }, [characters]);

  return (
    <div>
      <CharactersSection characters={favorites} />
    </div>
  );
};

export default Favorites;
