import { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            parentName : 'parent'
        }
        this.greetParent = this.greetParent.bind(this) 
    }

    greetParent(childName) {
        alert( `Hello ${this.state.parentName} from ${childName}`)
    }
    render(){
        return(
            <div>
                {/* parent method as props from child. child access parent function */}
                <ChildComponent greetHandler= { this.greetParent}/>
            </div>
        );
    }
}

export default ParentComponent;