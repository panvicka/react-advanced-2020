import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current);
    console.log(refContainer.current.value);
    console.log(divContainer);
    console.log(divContainer.current);
  };

  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus(); // focus the input field
  });

  console.log(refContainer);

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer}></input>
          <button type="submit">submit</button>
        </div>
      </form>
      <div ref={divContainer}>Hello</div>
    </>
  );
};

export default UseRefBasics;
