export interface ICharacter {
  id: string;
  name: string;
  history: string;
  image: string;
  gender: string;
  status: string;
  occupation: string;
}

export type ICharacterContext = {
  state: ICharacterState;
  setCharacters: () => void;
  addFavorite: (character: ICharacter) => void;
};

export interface ICharacterState {
  characters: ICharacter[];
  favorites: ICharacter[];
}

export enum ActionType {
  ADD_CHACARTERS = "ADD_CHACARTERS",
  ADD_FAVORITE = "ADD_FAVORITE",
  REMOVE_FAVORITE = "REMOVE_FAVORITE",
}

export type IAction = {
  type: ActionType;
  payload: ICharacter[] | ICharacter;
};
