import React from 'react'

function clickHandler(){
console.log('Click Event');
}

function FunctionClick() {
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick
