import React, { useContext } from 'react';
import CharacterContext from '../context/characters/CharactersContext';
import CharactersSection from '../components/organisms/CharactersSection';

const Home: React.FC = () => {
  const {
    state: { characters }
  } = useContext(CharacterContext);

  return (
    <div>
      <CharactersSection characters={characters} />
    </div>
  );
};

export default Home;
