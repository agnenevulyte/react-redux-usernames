import React from "react";

export default function SearchBar({ handleChange, input }) {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="input-group mb-3 col-sm-6">
          <input
            type="text"
            className="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            value={input}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}
