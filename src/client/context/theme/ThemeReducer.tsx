import {
  IThemeState,
  IAction,
  ActionType,
  Theme,
} from "../../types/ThemeContext";

export default (state: IThemeState, action: IAction): IThemeState => {
  switch (action.type) {
    case ActionType.TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT,
      };
    default:
      return state;
  }
};
