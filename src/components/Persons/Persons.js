import React from 'react';
import Person from "./Person/Person";

const persons = (props) => {
    console.log('[Persons.js] rendering...');
    return props.persons.map(
        (person, index) =>
            <Person key={person.id}
                    name={person.name} age={person.age}
                    click={() => props.clicked(index)}
                    changed={(ev) => props.changed(ev,  person.id)}/>
    );
};

export default persons;