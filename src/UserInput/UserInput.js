import React from "react";

const UserInput = props => {
  return (
    <div className="UserInput">
      <input onChange={props.handleChange} type="text" />
    </div>
  );
};

export default UserInput;
