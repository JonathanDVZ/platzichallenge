import { Dispatch } from "react";

export interface ICharacter {
  id: string;
  name: string;
  history: string;
  image: string;
  gender: string;
  status: string;
  occupation: string;
  favorite: boolean;
}

export interface ICharacterState {
  characters: ICharacter[];
}

export interface ICharacterContext {
  state: ICharacterState;
  dispatch: Dispatch<IAction>;
}

export enum ActionType {
  ADD_CHACARTERS = "ADD_CHACARTERS",
  TOGGLE_FAVORITE = "TOGGLE_FAVORITE",
}

export type IAction = {
  type: ActionType;
  payload: ICharacter[] | ICharacter;
};

export enum SortType {
  DEFAULT = "DEFAULT",
  NAME = "NAME",
  GENDER = "GENDER",
  STATUS = "STATUS",
}

export enum FilterType {
  DEFAULT = "DEFAULT",
  MAN = "MAN",
  WOMAN = "WOMAN",
  PET = "PET",
  DIED = "DIED",
  ALIVE = "ALIVE",
  FICTIONAL = "FICTIONAL",
  ROBOT = "ROBOT",
}
