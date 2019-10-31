import React, { useState, useEffect } from "react";
import Title from "./Title";
import SearchBar from "./SearchBar";
import ResultsContainer from "./ResultsContainer";

export default function SearchPage() {
  // 1. stored input
  const [input, setInput] = useState("");
  // 1. results state
  const [results, setResults] = useState([]);
  // 7. filtered results state
  const [filteredResults, setFilteredResults] = useState([]);

  // 4. when the component mounts, call the API
  useEffect(() => {
    getUsers();
  }, []);

  // 9. when the input changes, then filter
  useEffect(() => {
    filterResults();
  }, [input]);

  // 5. Fetch the users and store them in results state
  const getUsers = async () => {
    try {
      let response = await fetch(`https://jsonplaceholder.typicode.com/users`);
      let data = await response.json();
      return setResults(data);
    } catch (err) {
      console.log(err);
    }
  };

  // 8. filtering state `results`
  const filterResults = () => {
    const updatedResults = results.filter(result => {
      const allCaps = result.username.toUpperCase();
      return allCaps.includes(input);
    });
    setFilteredResults(updatedResults);
  };

  // 2. stored input on change
  const handleChange = event => {
    setInput(event.target.value.toUpperCase());
  };

  return (
    <div>
      <Title />
      {/* 3. passing handleChange down to the SearchBar.js */}
      <SearchBar input={input} handleChange={handleChange} />
      {/* 6. passing the results down to the ResultsContainer.js */}
      <ResultsContainer results={results} filteredResults={filteredResults} />
    </div>
  );
}
