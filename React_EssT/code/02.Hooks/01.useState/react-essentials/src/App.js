import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");

  useEffect(() => {
    console.log(`I am ${emotion} around here!`);
  }, [emotion]);

  useEffect(() => {
    console.log(`I am ${secondary} around here!`);
  }, [secondary]);

  return (
    <>
      <h1>
        Current emotion is {emotion} and {secondary}.
      </h1>
      <button onClick={() => setEmotion("happy")}>Happy</button>
      <button onClick={() => setEmotion("frustrated")}>Frustrate</button>
      <button onClick={() => setEmotion("enthusiastic")}>Enthuse</button>
      <br />
      <button onClick={() => setSecondary("crabby")}>Crabby</button>
      <button onClick={() => setSecondary("tired")}>Tired</button>
    </>
  );
}

export default App;
