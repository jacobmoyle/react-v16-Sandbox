import React, { Component } from "react";
import PropTypes from "prop-types";
import withClass from "../../../hoc/WithClass";
import { AuthContext } from "../../../containers/App";

import s from "./Person.css";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElement = React.createRef();
    console.log("[Person.js] Inside Constructor", this.props);
  }

  componentDidMount() {
    console.log("[Person.js] Inside ComponentDidMount", this.props);
    if (this.props.position === 0) {
      this.inputElement.current.focus();
    }
  }

  componentWillMount() {
    console.log("[Person.js] Inside ComponentWillMount", this.props);
  }

  focus() {
    this.inputElement.current.focus();
  }

  render() {
    console.log("[Person.js] Inside Render", this.props);

    return (
      <React.Fragment>
        <AuthContext.Consumer>
          {auth => (auth ? <p>autheticated!</p> : null)}
        </AuthContext.Consumer>
        <p>
          I'm {this.props.name} --- some-number {this.props.age}
        </p>
        <p>{this.props.children}</p>
        <input
          ref={this.inputElement}
          type="text"
          onChange={this.props.handleChange}
          value={this.props.name}
        />
        <button type="button" onClick={this.props.handleClick}>
          Delete
        </button>
      </React.Fragment>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.bool
};

export default withClass(Person, s.person);
