import { Dispatch } from "react";
import { IAction, ActionType } from "../../types/ThemeContext";

const toggleTheme = (dispatch: Dispatch<IAction>) => {
  dispatch({ type: ActionType.TOGGLE_THEME });
};

export { toggleTheme };
