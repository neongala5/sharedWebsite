import React from "react";
import "./App.css";

import TemporaryPicture from './components/TemporaryPicture/TemporaryPicture';
import TemporaryDescription from "./components/TemporaryDescription/TemporaryDescription";

function App() {
  return (
    <div className="App">
      <TemporaryPicture/>
      <TemporaryDescription/>
    </div>
  );
}

export default App;
