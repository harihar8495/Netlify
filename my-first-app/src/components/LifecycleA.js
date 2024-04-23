import { Component } from "react";

class LifecycleA extends Component{
    constructor(props){
        super(props)

        this.state = {
            name: 'hari'
        }
        console.log( 'Lifecycle constructor')
    }
    render() {
        return(
           <div>

           </div>
        )
    }
}