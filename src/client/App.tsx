import React from "react";
import Navbar from "./components/organisms/Navbar";
import "./styles/main.scss";

const App: React.FC = () => (
  <div>
    <Navbar />
    <p>Hello from Client</p>
  </div>
);

export default App;
