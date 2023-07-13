import React, { useReducer, useEffect } from "react";
import axios from "axios";
import CharacterContext from "./CharacterContext";
import CharacterReducer from "./CharacterReducer";
import {
  ICharacterState,
  ActionType,
  ICharacter,
} from "../types/CharacterContext";

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
    setCharacters();
  }, []);

  const setCharacters = async () => {
    const { data }: { data: IDataResult } = await axios.get("/api/characters");

    const characters: ICharacter[] = data.docs.map(
      ({ _id, Nombre, Historia, Imagen, Genero, Estado, Ocupacion }) => ({
        id: _id,
        name: Nombre,
        history: Historia,
        image: Imagen,
        gender: Genero,
        status: Estado,
        occupation: Ocupacion,
      })
    );
    dispatch({ type: ActionType.ADD_CHACARTERS, payload: characters });
  };

  const addFavorite = (character: ICharacter) => {
    dispatch({ type: ActionType.ADD_FAVORITE, payload: character });
  };

  return (
    <CharacterContext.Provider value={{ state, setCharacters, addFavorite }}>
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterProvider;
