import React, { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState);
  // console.log(useState("hello"));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);
  const [text, setText] = useState("randomTitle");

  const handleClick = () => {
    setText("haha");
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        title change
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
