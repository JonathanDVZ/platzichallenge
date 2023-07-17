import { Dispatch } from 'react';

export interface IThemeState {
  theme: Theme;
}

export enum Theme {
  DARK = 'DARK',
  LIGHT = 'LIGHT'
}

export interface IThemeContext {
  state: IThemeState;
  dispatch: Dispatch<IAction>;
}

export enum ActionType {
  TOGGLE_THEME = 'TOGGLE_THEME'
}

export type IAction = {
  type: ActionType;
};
