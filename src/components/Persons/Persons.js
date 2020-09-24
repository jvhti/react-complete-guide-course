import React, {Component} from 'react';
import Person from "./Person/Person";

class Persons extends Component {
    render() {
        console.log('[Persons.js] rendering...');
        return this.props.persons.map(
            (person, index) =>
                <Person key={person.id}
                        name={person.name} age={person.age}
                        click={() => this.props.clicked(index)}
                        changed={(ev) => this.props.changed(ev, person.id)}/>
        );
    }
}

export default Persons;