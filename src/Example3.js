import React from "react";
import Example2 from "./Example2";


function getButtonText() {
    return 'Click Me!'
}

const Example3 = () =>  {
    const buttonText = {text : 'Submit' , number : 1};
    const style = {backgroundColor : 'red', color : 'white'};
    return (
        <div>
            <label htmlFor="name" className="label">enter-email</label>
            <input id="name" type="text"></input>
            <button style={{backgroundColor : 'red', color : 'white'}}>{buttonText.text}</button>
            <button style={style}>{buttonText.text}</button>
        </div>
    )
}

export default Example3;