import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLogedIn: true

        }
    }


    render() {

        return (
            this.state.isLogedIn ? (<div>Welcome Login Admin</div>) : (<div>Wlcone Gust User</div>)
        )


        //------------------2nd
        // let message
        //         if (this.state.isLogedIn) {
        //             message = <div>Welcome Login Admin</div>
        //         } else {
        //             message = <div>Wlcone Gust User</div>
        //         }
        //     return(message)


        //------------------1st
        // if (this.state.isLogedIn) {
        //    return(
        //     <div>Welcome Admin</div>
        //    ) 

        // } else {
        //     return(
        //         <div>Welcome User</div>
        //     )
        // }

        // return (
        //     <div>
        //         Welcome Echo...
        //     </div>
        // )
    }
}

export default UserGreeting
