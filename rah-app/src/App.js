import React from "react";
import { Input } from "semantic-ui-react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Input focus placeholder="Search..." />
        </p>
      </header>
    </div>
  );
}

export default App;

//export default InputExampleFocus
