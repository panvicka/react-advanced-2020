import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  const firstValue = text || "hello world";
  const secondValue = text && "hello world";

  return (
    <>
      {/* <h1>First value : {firstValue}</h1> */}
      {/*  <h1>Second value : {secondValue}</h1> */}
      <h1>{text || "oops, name empty"}</h1>
      <button
        className="btn"
        onClick={() => {
          setIsError(!isError);
        }}
      >
        Toggle
      </button>
      <p>{text && <h1>Hello {text}</h1>}</p>
      {/* <p>{isError && <h1>No name to say hello to </h1>}</p> */}
      <p>{isError ? <h2>error </h2> : <h2>not error</h2>}</p>
    </>
  );
};

export default ShortCircuit;
