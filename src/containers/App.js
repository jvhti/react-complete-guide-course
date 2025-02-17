import React, { Component } from 'react';
import classes from './App.css';
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";
import Aux from "../hoc/Aux";
import AuthContext from "../context/auth-context";

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');

    // this.state = {} <- I can initialize the state here
    // this was the only way to initialize the state before
    // now we can simply define it in the class.
  }

  state = {
    persons: [
      {id: 'asdasd', name: 'Max', age: 28},
      {id: 'asdfgddfg', name: 'Manu', age: 29},
      {id: 'ghjfd', name: 'Stephanie', age: 26}
    ],
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props, state);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] component did mount');
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('[App.js] shouldComponentUpdate', nextProps, nextState, nextContext);
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[App.js] componentDidUpdate', prevProps, prevState, snapshot);
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons]; // or use slice() to copy
    persons.splice(index, 1);
    this.setState({persons: persons});
  };

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  nameChangedHandler = (ev, id) => {
    const persons = [...this.state.persons];

    persons.find((p) => p.id === id)
        .name = ev.target.value;

    this.setState((prevState) => ({persons, changeCounter: prevState.changeCounter + 1}));
  };

  loginHandler = () => {
    this.setState({authenticated: true});
  };

  render() {
    console.log('[App.js] render');

    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons persons={this.state.persons}
                     clicked={this.deletePersonHandler}
                     changed={this.nameChangedHandler}/>;
    }

    return (
        <Aux>
          <button onClick={() => {
            this.setState({showCockpit: false})
          }}>Remove Cockpit
          </button>
          <AuthContext.Provider value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}>
            {this.state.showCockpit ? <Cockpit
                title={this.props.appTitle}
                personsLength={this.state.persons.length}
                showPersons={this.state.showPersons}
                clicked={this.togglePersonsHandler}/> : null}
            {persons}
          </AuthContext.Provider>
        </Aux>
    );
  }
}

export default withClass(App, classes.App);
