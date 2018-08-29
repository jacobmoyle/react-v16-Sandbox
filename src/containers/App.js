import React, { Component } from "react";
import Cockpit from "../components/Cockpit/Cockpit";
import Persons from "../components/Persons/Persons";
import withClass from "../hoc/WithClass";

import s from "./App.css";

export const AuthContext = React.createContext(false);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { id: 123, name: "Jacob", age: 29 },
        { id: 234, name: "Chris", age: 21 },
        { id: 345, name: "Jess", age: 19 }
      ],
      username: "",
      showPersons: false,
      toggleClicked: 0,
      authenticated: false
    };
    // console.log("[App.js] inside constructor", props);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // new in React 16(.3?)
    console.log(
      "[App.js] inside getDerivedStateFromProps",
      nextProps,
      prevState
    );

    return prevState;
  }

  getSnapshotBeforeUpdate() {
    // gets snapshot of DOM before being changed
    console.log("[App.js] inside getSnapshotBeforeUpdate");
  }

  componentWillMount() {
    // console.log("[App.js] Inside ComponentWillMount", this.props);
  }

  shouldComponentUpdate() {
    return true;
  }

  componentDidMount() {
    // console.log("[App.js] Inside ComponentDidMount", this.props);
  }

  togglePersons = () => {
    this.setState((prevState, _) => {
      return {
        showPersons: !prevState.showPersons,
        toggleClicked: prevState.toggleClicked + 1
      };
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

  deletePerson = personIndex => {
    const newPersons = [...this.state.persons];
    newPersons.splice(personIndex, 1);
    this.setState({
      persons: newPersons
    });
  };

  handleLogin = () => {
    this.setState({
      authenticated: true
    });
  };

  render() {
    console.log("[App.js] inside render", this.state);
    let persons = <p>Data Hidden</p>;
    if (this.state.showPersons) {
      // dynamic list rendering
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePerson}
            changed={this.changeName}
          />
        </div>
      );
    }

    return (
      <React.Fragment>
        <button
          onClick={() => {
            this.setState({ showPersons: true });
          }}
        >
          Show Persons
        </button>
        <h1>{this.props.title}</h1>
        <Cockpit
          login={this.handleLogin}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersons}
        />
        <AuthContext.Provider value={this.state.authenticated}>
          {persons}
        </AuthContext.Provider>
      </React.Fragment>
    );
  }
}

export default withClass(App, s.app);
