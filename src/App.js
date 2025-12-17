import ReactGA from "react-ga";
import React from "react";
import Main from "./navigation/Main";
import "./App.css";

ReactGA.initialize("UA-141023410-2");
ReactGA.pageview("/");

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
