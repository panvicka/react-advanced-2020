import React, { useState } from "react";

const UseStateCounter = () => {
  const [values, setvalues] = useState(0);

  const complexIncrease = () => {
    setTimeout(() => {
      setvalues((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };

  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>Counter</h2>
        <h1>{values}</h1>
        <button className="btn" onClick={() => setvalues(values - 1)}>
          decrease
        </button>
        <button className="btn" onClick={() => setvalues(values + 1)}>
          increase
        </button>
        <button className="btn" onClick={() => setvalues(0)}>
          reset
        </button>
      </section>

      <section style={{ margin: "4rem 0" }}>
        <h2>Complex counter</h2>
        <h1>{values}</h1>
        <button className="btn" onClick={complexIncrease}>
          increase later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
