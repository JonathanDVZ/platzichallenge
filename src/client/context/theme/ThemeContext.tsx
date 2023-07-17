import { createContext } from 'react';
import { IThemeState, IThemeContext } from '../../types/ThemeContext';

const CharacterContext = createContext<IThemeContext>({
  state: {} as IThemeState,
  dispatch: () => {}
});

export default CharacterContext;
