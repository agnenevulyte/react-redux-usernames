import React from "react";

export default function ResultsContainer({
  results,
  filteredResults,
  loading,
  showAll
}) {
  return (
    <div>
      <h4>Results: </h4>
      <button onClick={showAll} type="button" className="btn btn-primary">
        Show All
      </button>
      {/* {!results || (results.length < 1 && <div>Loading...</div>)} */}
      {loading ? <p>Loading...</p> : null}
      {filteredResults && filteredResults.length > 0 ? (
        <ul>
          {filteredResults.map((each, i) => (
            <li key={i} className="fadeIn margin-top">
              {each.title}
            </li>
          ))}
        </ul>
      ) : (
        <ul>
          {results.map((each, i) => (
            <li key={i} className="margin-top">
              {each.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
