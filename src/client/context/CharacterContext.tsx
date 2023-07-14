import { createContext } from "react";
import { ICharacterContext, ICharacterState } from "../types/CharacterContext";

const CharacterContext = createContext<ICharacterContext>({
  state: {} as ICharacterState,
  dispatch: () => {},
});

export default CharacterContext;
