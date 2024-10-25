import { useState } from 'react';
function WelcomeFC(props){
    // useState hook...
    const [count, setCount] = useState(0);
    return (
        <>
        <h4> Hello, <u>{props.name}</u></h4>
        <h5> You clicked {count} times</h5>
        <button onClick={() => setCount(count + 1)}>
            Click me
        </button>
        <h6> - Function Component - </h6>
        </>
    )
}

export default WelcomeFC;