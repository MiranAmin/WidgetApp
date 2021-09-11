import React, { useState, useEffect } from "react";

const Search = () => {
  const [term, setTerm] = useState("");

  console.log("I run with every render");
  useEffect(() => {
    console.log("I run after every render and initial render");
  }, [term]);

  const onTermChange = (e) => {
    setTerm(e.target.value);
  };
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={onTermChange}
            className="input"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
