import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("call useEffect");
    if (value > 0) {
      document.title = `new messages (${value})`;
    } else {
      document.title = `no new messages`;
    }
  }, [value]);

  //initial render
  useEffect(() => {
    console.log("initial render");
  }, []);

  console.log("render component");

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        button
      </button>
    </>
  );
};

export default UseEffectBasics;
