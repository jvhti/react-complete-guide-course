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

  nameChangedHandler = (ev, id) => {
    const persons = [...this.state.persons];

    persons.find((p) => p.id === id)
        .name = ev.target.value;

    this.setState({persons});
  };

  render() {
    const buttonStyle = {
      backgroundColor: 'green',
      color: 'white',
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
                      click={() => this.deletePersonHandler(index)}
                      changed={(ev) => this.nameChangedHandler(ev,  person.id)}/>
                )}
          </div>
      );

      buttonStyle.backgroundColor = 'red';
    }

    const paragraphClasses = [];

    if (this.state.persons.length <= 2)
      paragraphClasses.push('red');

    if (this.state.persons.length <= 1)
      paragraphClasses.push('bold');

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={paragraphClasses.join(' ')}>This is really working!</p>
        <button style={buttonStyle} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
