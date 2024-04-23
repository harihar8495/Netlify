import { Component } from "react"; 

class EventBind extends Component{
    constructor(){
        super()
        this.state = {
            message : 'hello'
        }
        //best practise to bind at the constructor 
        // this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message : 'Good bye'
    //     })
    // }

    //final method to binding but still in experimental feature
    clickHandler = () => {
        this.setState({
            message: 'Good bye'
        })
    }
    render() {
        return(
            <div>
                <div>{this.state.message}</div>
                {/* /* undef ined error *
                <button onClick={this.clickHandler.bind(this)}>click</button>
                /}

                {/* bind this event to prevent it from undefined in console.log. 
                it makes component re render everytime so not best practise to follow*/}
                {/* <button onClick={this.clickHandler.bind(this)}>click</button> */}

                {/* <button onClick={() => this.clickHandler() }>click</button> */}
                <button onClick={ this.clickHandler}>click</button>

            </div>

        );
    }
}

export default EventBind;