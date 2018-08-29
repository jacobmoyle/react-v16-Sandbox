import React from "react";

import s from "./Cockpit.css";

const cockpit = props => {
  let assignClasses = []; // Dynamic styling
  let bttnClasses = [s.bttn];

  if (props.showPersons) {
    bttnClasses.push(s.red);
  }
  if (props.persons.length <= 2) {
    assignClasses.push(s.red);
  }
  if (props.persons.length <= 1) {
    assignClasses.push(s.bold);
  }

  return (
    <React.Fragment>
      <p className={assignClasses.join(" ")}>
        Dynamically Styled Text. Delete People
      </p>
      <button className={bttnClasses.join(" ")} onClick={props.clicked}>
        {props.showPersons ? "Hide" : "Show"}
      </button>
      <button onClick={props.login}>Long In</button>
    </React.Fragment>
  );
};

export default cockpit;
