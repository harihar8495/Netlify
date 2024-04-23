import React from "react";

function ChildComponent(props) {
    return(
        <div>
            {/* passing child props in parent methods */}
            <button onClick={ () => props.greetHandler('child') }>Greet parent</button>

        </div>
    )
}

export default ChildComponent;