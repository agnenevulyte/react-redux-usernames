import React from "react";

export default function ResultsContainer({ results, filteredResults }) {
  return (
    <div>
      <h4>Results: </h4>
      {filteredResults && filteredResults.length > 0 ? (
        <ul>
          {filteredResults.map((each, i) => (
            <li className="fadeIn" key={i} className="margin-top">
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
