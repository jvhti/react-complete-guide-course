import React from 'react';
import classes from "./Cockpit.css";

const cockpit = (props) => {
  const paragraphClasses = [];

  if (props.persons.length <= 2)
    paragraphClasses.push(classes.red);

  if (props.persons.length <= 1)
    paragraphClasses.push(classes.bold);

  return (
      <div className={classes.Cockpit}>
        <h1>Hi, I'm a React App</h1>
        <p className={paragraphClasses.join(' ')}>This is really working!</p>
        <button className={props.showPersons ? classes.Red : null}
                onClick={props.clicked}>Toggle Persons</button>
      </div>);
};

export default cockpit;