import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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

  render() {
    const buttonStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
          <div>
            {this.state.persons.map(
                (person, index) =>
                  <Person key={person.id}
                      name={person.name} age={person.age}
                      click={() => this.deletePersonHandler(index)}/>
                )}
          </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={buttonStyle} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );

    // "Compiled code":
    //return React.createElement('div', {className: 'App'},
    //    React.createElement('h1', null, 'Hi, I\'m a React App'));
  }
}

export default App;
