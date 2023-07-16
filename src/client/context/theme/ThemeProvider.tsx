import React, { useReducer, useEffect } from "react";
import ThemeContext from "./ThemeContext";
import CharacterReducer from "./ThemeReducer";
import { IThemeState, Theme } from "../../types/ThemeContext";

const CharacterProvider = ({ children }: { children: React.ReactNode }) => {
  const initialState: IThemeState = { theme: Theme.LIGHT };

  const [state, dispatch] = useReducer(CharacterReducer, initialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default CharacterProvider;
