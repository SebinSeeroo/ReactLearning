import React from 'react'

function Person({person}) {
    return (
        <div>
        <h2>Name is {person.name} and age {person.age}.</h2>
        </div>
    )
}

export default Person
