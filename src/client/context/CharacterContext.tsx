import { createContext } from "react";
import { ICharacterContext } from "../types/CharacterContext";

const CharacterContext = createContext<ICharacterContext | null>(null);

export default CharacterContext;
