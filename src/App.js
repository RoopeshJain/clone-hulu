import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import Result from "./Result";
import requests from "./requests";

function App() {
  const [selectedOption, setselectedOption] = useState(requests.fetchtrending);

  return (
    <div className="App">
      <Header />
      <Nav setselectedOption={setselectedOption} />
      <hr />
      <Result selectedOption={selectedOption} />
    </div>
  );
}

export default App;
