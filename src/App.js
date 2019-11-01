import React, { useState } from "react";
import "./App.css";
import SearchPage from "./components/SearchPage";
import AboutPage from "./components/AboutPage";

function App() {

  const [ isSearch, setIsSearch ] = useState(true);

  const togglePages = () => {
    return setIsSearch(!isSearch)
  }

  return (
    <div className="App">
      { isSearch ? <SearchPage togglePage={togglePages} /> : <AboutPage togglePage={togglePages} /> }
    </div>
  );
}

export default App;
