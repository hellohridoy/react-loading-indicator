import { BarLoader, BounceLoader, BeatLoader } from "react-spinners";
import "./App.css";
import React from "react";

function App() {
  return (
    <div className="App">
      <BounceLoader loading size={30} color="red" />
      <BarLoader loading size={20} color="green" />
      <BeatLoader loading size={10} color="blue" />
    </div>
  );
}

export default App;
