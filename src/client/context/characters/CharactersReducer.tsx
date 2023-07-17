import { ICharacterState, IAction, ICharacter, ActionType } from '../../types/CharactersContext';

export default (state: ICharacterState, action: IAction): ICharacterState => {
  switch (action.type) {
    case ActionType.ADD_CHACARTERS:
      return { ...state, characters: action.payload as ICharacter[] };
    case ActionType.TOGGLE_FAVORITE:
      const updatedCharacters = state.characters.map((character) => ({
        ...character,
        favorite:
          character.id === (action.payload as ICharacter).id
            ? !character.favorite
            : character.favorite
      }));
      return {
        ...state,
        characters: updatedCharacters
      };
    default:
      return state;
  }
};
