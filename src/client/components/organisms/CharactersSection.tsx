import React, { useContext } from "react";
import CharacterContext from "../../context/CharacterContext";
import { ICharacterState } from "../../types/CharacterContext";
import SearchBox from "../molecules/SearchBox";
import CharacterItem from "../molecules/CharacterItem";

const CharactersSection: React.FC = () => {
  const { state } = useContext(CharacterContext);
  const { characters } = state as ICharacterState;
  console.log(characters);
  return (
    <section className="ptz-characters-section">
      <SearchBox />
      <div className="ptz-characters-section__result">
        {characters.map((character) => (
          <CharacterItem character={character} />
        ))}
      </div>
    </section>
  );
};

export default CharactersSection;
