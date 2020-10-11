import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const remoteItem = (id) => {
    let newPeople = people.filter((person) => {
      return person.id !== id;
    });

    setPeople(newPeople);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4> {name} </h4>
            <button onClick={() => remoteItem(id)}>remove</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        clear item
      </button>
    </>
  );
};

export default UseStateArray;
