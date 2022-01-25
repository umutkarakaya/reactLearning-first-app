import React from "react";


const Example2 = () =>  {
    const buttonText = 'Submit!';
    return (
        <div>
            <label for="name" className="label">enter-email</label>
            <input id="name" type="text"></input>
            <button style={{backgroundColor : 'red', color : 'white'}}>{buttonText}</button>
        </div>
    )
}


export default Example2;