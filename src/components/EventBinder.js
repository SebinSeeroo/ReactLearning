import React, { Component } from 'react'

class EventBinder extends Component {

constructor(props) {
    super(props)

    this.state = {
         message: 'Heloo',
         message1: 'Heloo1'
    }
    this.EventHandler = this.EventHandler.bind(this);
}

EventHandler() {
    this.setState((prevState) => ({
    message: 'Goodbyee' + prevState.message
}))
}

ClickEventHandler = () =>{
    this.setState({
        message1:'Goodbyee1'
    })
}

    render() {
        return (
            <div>
            <div>{this.state.message}</div>
            <div>{this.state.message1}</div>
            {/*<button onClick={this.EventHandler.bind(this)}> Click Me </button>*/}
             {/*<button onClick={() => this.EventHandler()}> Click Me </button>*/}
             <button onClick={this.EventHandler}> Click Me </button><br />
             <button onClick={this.ClickEventHandler}> Click Me1 </button>
            </div>
        )
    }
}

export default EventBinder
