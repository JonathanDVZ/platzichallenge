import { Dispatch } from 'react';
import axios from 'axios';
import { IAction, ICharacter, ActionType } from '../../types/CharactersContext';

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

const setCharacters = async (dispatch: Dispatch<IAction>) => {
  const { data }: { data: IDataResult } = await axios.get('/api/characters');

  const characters: ICharacter[] = data.docs.map(
    ({ _id, Nombre, Historia, Imagen, Genero, Estado, Ocupacion }) => ({
      id: _id,
      name: Nombre,
      history: Historia,
      image: Imagen,
      gender: Genero,
      status: Estado,
      occupation: Ocupacion,
      favorite: false
    })
  );
  dispatch({ type: ActionType.ADD_CHACARTERS, payload: characters });
};

const toggleFavorite = (dispatch: Dispatch<IAction>, character: ICharacter) => {
  dispatch({ type: ActionType.TOGGLE_FAVORITE, payload: character });
};

export { setCharacters, toggleFavorite };
