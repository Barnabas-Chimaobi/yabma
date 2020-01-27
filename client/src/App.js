import React from "react";
import logo from "./logo.svg";
import Header from "./component/Header";
import "./App.css";
import Header2 from "./component/Header2";
import Body from "./component/Body";

function App() {
  return (
    <div className="App">
      <Header />
      <Header2 />
      <Body />
    </div>
  );
}

export default App;
