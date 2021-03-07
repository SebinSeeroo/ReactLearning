import React from "react";

class Welcome extends React.Component {
    render(){
        return <h1>Long time no see..{this.props.name}</h1>
    }
}

export default Welcome