import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

function AppTwo() {
  return <h1>This is the Second App</h1>;
}

ReactDOM.render(
  //  Basic Create Element
  //  React.createElement("h1", { style: { color: "blue" } }, "Heyyyy Everyone!"),

  // Nesting
  //  React.createElement(
  //    "ul",
  //    null,
  //    React.createElement("li", null, "Monday"),
  //    React.createElement("li", null, "Tuesday"),
  //    React.createElement("li", null, "Wednesday"),
  //    React.createElement("li", null, "Tuesday")
  //  ),

  // Babel converts the below JSX
  //  <ul>
  //    <li>Monday</li>
  //    <li>Tuesday</li>
  //    <li>Wednesday</li>
  //  </ul>,

  // Wrapping to Adjacent React App
  //  <div>
  //    <App />
  //    <AppTwo />
  //  </div>,

  // Using React.Fragment to Display two different Apps
  //  <React.Fragment>
  //    <App />
  //    <AppTwo />
  //  </React.Fragment>,

  // Short hand of React.Fragment
  //  <>
  //    <App />
  //    <AppTwo />
  //  </>,

  <App />,

  document.getElementById("root")
);
