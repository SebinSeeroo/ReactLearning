import React from 'react'
import Person from "./Person";

function nameList() {

    const names = ['Sebin', 'Echo', 'Shalu'];
    const persons = [
    {
        id:1,
        name: 'Sebin',
        age: 28,
    },
    {
        id:2,
        name: 'Shalu',
        age: 26
    }
];
//const personList = persons.map(person => <h2>Name is {person.name} and age {person.age}.</h2>);  --2
const personList = persons.map(person => <Person person={person} /> )
    return (
        //<div>{names.map(name => <h2>{name}</h2>)}</div>  --1
        //<div>{personList}</div> --2
        <div>{personList}</div>
        )
}

export default nameList
