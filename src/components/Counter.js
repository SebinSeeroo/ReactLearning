import React, { Component } from 'react'

class Counter extends Component {

constructor() {
    super()

    this.state = {
        count: 0
         
    }
}

incrementCount(){
    this.setState({
        count: this.state.count + 1
    },() => {
        console.log('callback', this.state.count)
    })
    // console.log('Not callback', this.state.count)
}

    render() {
        return (
            <div>
                <p><h1>count</h1> <h2>{this.state.count}</h2></p>
                <button onClick={ () => this.incrementCount()}>Increment</button>
            </div>
        )
    }
}

export default Counter
