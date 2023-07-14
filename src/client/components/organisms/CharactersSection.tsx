import React, { useContext } from "react";
import SearchBox from "../molecules/SearchBox";
import CharacterItem from "../molecules/CharacterItem";
import { ICharacter } from "../../types/CharacterContext";

type Props = {
  characters: ICharacter[];
};

const CharactersSection: React.FC<Props> = ({ characters }) => (
  <section className="ptz-characters-section">
    <SearchBox />
    <div className="ptz-characters-section__result">
      {characters.map((character) => (
        <CharacterItem key={character.id} character={character} />
      ))}
    </div>
  </section>
);

export default CharactersSection;
