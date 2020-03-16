import React from "react";
import { Input } from "semantic-ui-react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: []
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:5000/ingredients")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ ingredients: data });
      })
      .catch(console.log);
    console.log(this.state.ingredients);
  }

  render() {
    const { ingredients } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <Input focus placeholder="Search..." />
            {console.log(ingredients[0])}
            <ul>
              {ingredients.map(item => (
                <li key={item.id}>
                  {item.id} {item.name}
                </li>
              ))}
            </ul>
          </p>
        </header>
      </div>
    );
  }
}

export default App;

//export default InputExampleFocus
