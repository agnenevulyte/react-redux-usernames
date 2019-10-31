import React from "react";

export default function SearchBar({ handleChange, input }) {
  return (
    <div>
      <input value={input} onChange={handleChange} />
    </div>
  );
}
