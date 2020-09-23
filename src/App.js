import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    // JSX:
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person name="Max" age="28"/>
        <Person name="Manu" age="29">
          My Hobbies: Racing
        </Person>
      </div>
    );

    // "Compiled code":
    //return React.createElement('div', {className: 'App'},
    //    React.createElement('h1', null, 'Hi, I\'m a React App'));
  }
}

export default App;
