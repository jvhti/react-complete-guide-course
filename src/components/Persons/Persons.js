import React, {Component} from 'react';
import Person from "./Person/Person";

class Persons extends Component {
    // static getDerivedStateFromProps(props, state){
    //     console.log('[Persons.js] getDerivedStateFromProps', props. state);
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[Persons.js] shouldComponentUpdate', nextProps, nextState, nextContext);
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate', prevProps, prevState);
        return {snapshot: 'test'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate', prevProps, prevState, snapshot);
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }

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