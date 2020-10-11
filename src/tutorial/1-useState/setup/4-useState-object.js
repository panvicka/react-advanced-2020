import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "name",
    age: 24,
    message: "bla",
  });

  const changeMsg = () => {
    setPerson({ ...person, message: "hello" });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMsg}>
        Change msg
      </button>
    </>
  );
};

export default UseStateObject;
