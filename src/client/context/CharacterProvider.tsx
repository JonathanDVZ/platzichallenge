import React, { useReducer, useEffect } from "react";
import CharacterContext from "./CharacterContext";
import CharacterReducer from "./CharacterReducer";
import { setCharacters } from "./CharacterActions";
import { ICharacterState } from "../types/CharacterContext";

type CharacterDoc = {
  _id: string;
  Nombre: string;
  Historia: string;
  Imagen: string;
  Genero: string;
  Estado: string;
  Ocupacion: string;
};

interface IDataResult {
  docs: CharacterDoc[];
}

const CharacterProvider = ({ children }: { children: React.ReactNode }) => {
  const initialState: ICharacterState = { characters: [], favorites: [] };

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
