/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';

function MyComponent(){
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");
    
    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]); // render only when count changes

    // useEffect(() => {
    //     document.title = `My Counter Program`;
    // }, []); // one and done effect

    function addCount(){
        setCount(c => c + 1);
    }

    function subtractCount(){
        setCount(c => c - 1);
    }

    function changeColor(){
        setColor(c => c === "green" ? "red" : "green");
    }

    return(
        <div>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button>
            <button onClick={changeColor}>Change Color</button>
        </div>
    );

}
export default MyComponent