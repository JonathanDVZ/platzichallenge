import { createContext } from 'react';
import { ICharacterContext, ICharacterState } from '../../types/CharactersContext';

const CharacterContext = createContext<ICharacterContext>({
  state: {} as ICharacterState,
  dispatch: () => {}
});

export default CharacterContext;
