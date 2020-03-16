import React from "react";
import { Input } from "semantic-ui-react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [1]
    };
  }

  componentDidMount() {
    fetch("http://10.0.0.150:5000/ingredients")
      .then(res => res.json())
      .then((data) => {
        this.setState({ ingredients: data.ingredients });
      })
      .catch(console.log);
    console.log(this.state.ingredients);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <Input focus placeholder="Search..." />
            <li key={item.name}>
              {item.name} {item.price}
            </li>
          </p>
        </header>
      </div>
    );
  }
}

export default App;

//export default InputExampleFocus
