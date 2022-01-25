import React from 'react';
import ReactDom from 'react-dom';


const Example1 = () =>  {
    return (
        <div>
            <label for="name" className="label">enter-email</label>
            <input id="name" type="text"></input>
            <button style={{backgroundColor : 'red', color : 'white'}}>Submit</button>
        </div>
    )
}


export default Example1;