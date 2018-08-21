import React from "react";
import "./Person.css";

const person = props => {
  let style = "";
  return (
    <div className="Person" style={style}>
      <p>
        I'm {props.name} --- some-number {props.age}
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.handleChange} value={props.name} />
      <button type="button" onClick={props.handleClick}>
        Delete
      </button>
    </div>
  );
};

export default person;
