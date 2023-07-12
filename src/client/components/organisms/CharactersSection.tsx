import React, { useEffect } from "react";
import axios from "axios";
import SearchBox from "../molecules/SearchBox";

const CharactersSection: React.FC = () => {
  useEffect(() => {
    getCharacters();
  }, []);

  const getCharacters = async () => {
    try {
      const { data } = await axios.get("/api/characters");
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="ptz-characters-section">
      <SearchBox />
    </section>
  );
};

export default CharactersSection;
