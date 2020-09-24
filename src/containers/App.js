import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 'asdasd', name: 'Max', age: 28},
      {id: 'asdfgddfg', name: 'Manu', age: 29},
      {id: 'ghjfd', name: 'Stephanie', age: 26}
    ],
    showPersons: false
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

    this.setState({persons});
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
          <div>
            {this.state.persons.map(
                (person, index) =>
                  <Person key={person.id}
                      name={person.name} age={person.age}
                      click={() => this.deletePersonHandler(index)}
                      changed={(ev) => this.nameChangedHandler(ev,  person.id)}/>
                )}
          </div>
      );
    }

    const paragraphClasses = [];

    if (this.state.persons.length <= 2)
      paragraphClasses.push(classes.red);

    if (this.state.persons.length <= 1)
      paragraphClasses.push(classes.bold);

    return (
        <div className={classes.App}>
          <h1>Hi, I'm a React App</h1>
          <p className={paragraphClasses.join(' ')}>This is really working!</p>
          <button className={this.state.showPersons ? classes.Red : null} onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
        </div>
    );
  }
}

export default App;
