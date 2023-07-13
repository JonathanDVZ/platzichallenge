import {
  ICharacterState,
  IAction,
  ICharacter,
  ActionType,
} from "../types/CharacterContext";

export default (state: ICharacterState, action: IAction): ICharacterState => {
  switch (action.type) {
    case ActionType.ADD_CHACARTERS:
      return { ...state, characters: action.payload as ICharacter[] };
    case ActionType.ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload as ICharacter],
      };
    default:
      return state;
  }
};
