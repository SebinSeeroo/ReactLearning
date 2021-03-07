import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            topic: 'react'
        }
    }

    handleUserName = (event) => {
        this.setState({
            userName: event.target.value
        })
    }
    handleTopic = (event) => {
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit = (event) => {
        alert(`${this.state.userName} -- ${this.state.topic}`)
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>User Name</label>
                    <input type='text'
                        value={this.state.userName}
                        onChange={this.handleUserName} required={true}></input>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.handleTopic}>
                        <option value='react'>React</option>
                        <option value='angular'>Angular</option>
                        <option value='jsp'>JSP</option>
                    </select>
                </div>
                <button type='submit'>Save</button>
            </form>
        )
    }
}

export default Form
