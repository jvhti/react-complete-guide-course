import React, {useEffect} from 'react';
import classes from "./Cockpit.css";

const cockpit = (props) => {
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    const timerId = setTimeout(() => {
      alert("Saved data to cloud!");
    }, 1000);

    return () => {
      // Clean up function
      console.log('[Cockpit.js] useEffect Clean-up function');
      clearTimeout(timerId);
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      console.log('[Cockpit.js] 2nd useEffect Clean-up function');
    }
  });

  const paragraphClasses = [];

  if (props.persons.length <= 2)
    paragraphClasses.push(classes.red);

  if (props.persons.length <= 1)
    paragraphClasses.push(classes.bold);

  return (
      <div className={classes.Cockpit}>
        <h1>{props.title}</h1>
        <p className={paragraphClasses.join(' ')}>This is really working!</p>
        <button className={props.showPersons ? classes.Red : null}
                onClick={props.clicked}>Toggle Persons</button>
      </div>);
};

export default cockpit;