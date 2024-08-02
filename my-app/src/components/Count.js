import React, { useState } from 'react'
import {} from 'react-router-dom'
const Count = () => {

    console.log("Count Created");

    // const [count, setCount] = useState(0);
    let count = 0;

    const increase = () => {
        count = count + 1;
        console.log(count);
    }

    return (
        <div className='count-container'>
            <h1>{count}</h1>
            <button onClick={increase}>Increase</button>
        </div>
    )
}

export default Count
