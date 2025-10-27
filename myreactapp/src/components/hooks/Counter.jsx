import React, { useState } from "react";
const Counter=()=>{

    const [counter, setCounter] = useState(0);

const increase=() => {

    setCounter(counter + 1);

};
const decrease=() => {
    
    setCounter( counter - 1);

};

return(
    <div>
        <h1>{counter}</h1>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
    </div>
);
};

export default Counter;
