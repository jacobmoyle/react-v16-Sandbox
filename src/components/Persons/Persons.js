import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  constructor(props) {
    super(props);
    this.lastPersonRef = React.createRef();
    // console.log("[Persons.js] Inside Constructor", this.props);
  }
  componentWillMount() {
    // console.log("[Persons.js] Inside ComponentWillMount", this.props);
  }

  componentDidMount() {
    // console.log("[Persons.js] Inside ComponentDidMount", this.props);
    this.lastPersonRef.current.focus();
  }

  componentWillReceiveProps(nextProps) {
    // console.log(
    //   "[UPDATE Persons.js] Inside componentWillReceiveProps",
    //   nextProps
    // );
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log(
    //   "[UPDATE Persons.js] Inside shouldComponentUpdate",
    //   nextProps,
    //   nextState
    // );
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    // console.log(
    //   "[UPDATE Persons.js] Inside componentWillUpdate",
    //   nextProps,
    //   nextState
    // );
  }

  componentDidUpdate() {
    // console.log("[UPDATE Persons.js] Inside componentDidUpdate");
  }

  render() {
    console.log("[Persons.js] Inside Render", this.props);
    return this.props.persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          ref={this.lastPersonRef}
          position={
            index // will be assigned to last item
          }
          name={person.name}
          age={person.age}
          handleClick={() => this.props.clicked(index)}
          handleChange={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
