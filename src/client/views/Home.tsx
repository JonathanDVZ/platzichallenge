import React, { useContext } from 'react';
import CharacterContext from '../context/characters/CharactersContext';
import CharactersSection from '../components/organisms/CharactersSection';
import Spinner from '../components/atoms/Spinner';

const Home: React.FC = () => {
  const {
    state: { characters },
    dispatch
  } = useContext(CharacterContext);

  return (
    <div>
      <CharactersSection characters={characters} dispatch={dispatch} />
      {characters.length === 0 && <Spinner />}
    </div>
  );
};

export default Home;
