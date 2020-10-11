import React from "react";

const ErrorExample = () => {
  let title = "random";

  const handleClick = () => {
    title = "hello";
    console.log({ title });
  };

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        title change
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
