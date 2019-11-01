import React, { useState, useEffect } from "react";
import Title from "./Title";

export default function AboutPage({ togglePage }) {
  
  return (
    <div>
      <Title text="About Page" />
      <p>I am on the ABOUT page now</p>
      <button onClick={togglePage}>Search Page</button>
    </div>
  );
}
