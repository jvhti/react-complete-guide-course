import React, {useEffect, useRef} from 'react';
import classes from "./Cockpit.css";

const cockpit = (props) => {
  const toggleButtonRef = useRef(null);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect");

    toggleButtonRef.current.click();

    return () => {
      // Clean up function
      console.log('[Cockpit.js] useEffect Clean-up function');
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      console.log('[Cockpit.js] 2nd useEffect Clean-up function');
    }
  });

  const paragraphClasses = [];

  if (props.personsLength <= 2)
    paragraphClasses.push(classes.red);

  if (props.personsLength <= 1)
    paragraphClasses.push(classes.bold);

  return (
      <div className={classes.Cockpit}>
        <h1>{props.title}</h1>
        <p className={paragraphClasses.join(' ')}>This is really working!</p>
        <button className={props.showPersons ? classes.Red : null}
                onClick={props.clicked} ref={toggleButtonRef}>Toggle Persons</button>
        <button onClick={props.login}>Log in</button>
      </div>);
};

export default React.memo(cockpit);