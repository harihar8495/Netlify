import { Component } from "react";

class UserGreeting extends Component{

    //conditional rendering
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn : true
        }
    }
 render() {
    return(
    this.state.isLoggedIn && <div>Hari</div>
    )
    // return(
    //    this.state.isLoggedIn ? 
    //    <div>Hari</div> : <div>Guest</div>
    // );
 }
}

export default UserGreeting;    