import React from "react";
import Navbar from "../components/organisms/Navbar";
import CharactersSection from "../components/organisms/CharactersSection";
import "../styles/main.scss";

const Home: React.FC = () => (
  <div>
    <Navbar />
    <CharactersSection />
  </div>
);

export default Home;
