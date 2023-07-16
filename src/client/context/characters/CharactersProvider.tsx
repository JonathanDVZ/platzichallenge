import React, { useReducer, useEffect } from "react";
import CharacterContext from "./CharactersContext";
import CharacterReducer from "./CharactersReducer";
import { setCharacters } from "./CharactersActions";
import { ICharacterState } from "../../types/CharactersContext";

const CharacterProvider = ({ children }: { children: React.ReactNode }) => {
  const initialState: ICharacterState = { characters: [] };

  const [state, dispatch] = useReducer(CharacterReducer, initialState);

  useEffect(() => {
    setCharacters(dispatch);
  }, []);

  return (
    <CharacterContext.Provider value={{ state, dispatch }}>
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterProvider;
