import React, { useState } from "react";

export default function ResultsContainer({ results, filteredResults, loading }) {

  const [showAllBoolean, setShowAllBoolean] = useState(false);

  function showAll() {
    setShowAllBoolean(true);
  }

  console.log('showAll is ', showAllBoolean);

  return (
    <div>
      <h4>Results: </h4>
      {/* {!results || (results.length < 1 && <div>Loading...</div>)} */}
      {loading ? <p>Loading...</p> : null}
      {filteredResults && filteredResults.length > 0 ? (
        <>
          <ul>
            {filteredResults.map((each, i) => (
              <li key={i} className="fadeIn margin-top">
                {each.title}
              </li>
            ))}

            <button onClick={showAll} type="button" className="btn btn-primary">
              Show All
            </button>
          </ul>
        </>
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
