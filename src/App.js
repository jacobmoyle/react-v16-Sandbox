import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: 123, name: "Jacob", age: 29 },
      { id: 234, name: "Chris", age: 21 },
      { id: 345, name: "Jess", age: 19 }
    ],
    username: "",
    showPersons: false
  };

  togglePersons = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  switchNameHandler = newName => {
    console.log("Was Clicked");
    this.setState({
      persons: [
        { name: newName, age: 29 },
        { name: "Alana", age: 21 },
        { name: "Jess", age: 65 }
      ]
    });
  };

  changeName = (event, id) => {
    const persons = [...this.state.persons];
    const personIndex = this.state.persons.findIndex(
      person => person.id === id
    );
    const newPerson = { ...this.state.persons[personIndex] };

    newPerson.name = event.target.value;
    persons[personIndex] = newPerson;

    this.setState({
      persons: persons
    });
  };

  changeUsername = e => {
    this.setState({
      username: e.target.value
    });
  };

  deletePerson = personIndex => {
    const newPersons = [...this.state.persons];
    newPersons.splice(personIndex, 1);
    this.setState({
      persons: newPersons
    });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = <p>Data Hidden</p>;
    if (this.state.showPersons) {
      // dynamic list rendering
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                {...person}
                key={person.id}
                // two way binding
                handleClick={() => this.deletePerson(index)}
                handleChange={event => this.changeName(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    let classes = []; // Dynamic styling

    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <h1>Hello</h1>
        <p className={classes.join(" ")}>
          Dynamically Styled Text. Delete People
        </p>
        <button style={style} onClick={this.togglePersons}>
          {this.state.showPersons ? "Hide" : "Show"}
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
