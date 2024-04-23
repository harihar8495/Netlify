import React from "react";
import './myStyles.css';

function Stylecomponent(props) {
    let className = props.primary ? "primary" : ''
    return(
<h1 className= { `${className} font-xl`}>Hello brother</h1>
    );
}

export default Stylecomponent;