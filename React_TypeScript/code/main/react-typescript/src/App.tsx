import React, {Component} from 'react';
import logo from "./logo.svg";
import "./App.css";
import Message from './Message'

class App extends Component{

  componentWillMount(){
    console.log("Almost there...")
  }

  componentDidMount(){
    console.log("Finally...hello!")
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <Message />
        </header>
      </div>
    )
  }
}


export default App;


/*** Basic and Complex Types ****
 *
function App() {
  let string_value: string = "Anuj";
  let number_value: number = 23;
  let boolean_value: boolean = true;
  let number_array: number[] = [3, 23, 12];
  let array_string: Array<string> = ["3", "23", "12", "Anuj"];

  // Complex Data Typer

  // tuple
  let tuple_value: [string, number] = ["Anuj", 2];

  // enum
//  enum enum_value {
//    first = 1,
//    second = 2,
//  };
//        <p>
//          The value {enum_value} is of {typeof enum_value} type !
//        </p>

  // any
  let any_value1: any = "Anuj";
  let any_value2: any = 3;

  // void
  const warning = (): void => {
    console.log("Warning");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h5> Basic Data Types </h5>
        <p>
          The value {string_value} is of {typeof string_value} type !
        </p>
        <p>
          The value {number_value} is of {typeof number_value} type !
        </p>
        <p>
          The value {boolean_value} is of {typeof boolean_value} type !
        </p>
        <p>
          The array {number_array} is of {typeof number_array} type !
        </p>
        <p>
          The value {array_string} is of {typeof array_string} type !
        </p>
        <h5> Complex Data Types </h5>
        <p>
          The value {tuple_value} is of {typeof tuple_value} type !
        </p>
        <p>
          The value {any_value1} is of {typeof any_value1} type !
        </p>
        <p>
          The value {any_value2} is of {typeof any_value2} type !
        </p>
      </header>
    </div>
  );
}
 *
 */
