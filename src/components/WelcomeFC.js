import { useEffect, useState } from 'react';
function WelcomeFC(props){
    // useState Hook...
    const [count, setCount] = useState(0);

    // useEffect Hook... 
    // It run after the page rendered for the first time [in case no dependency list]
    // It will be re-run depends on dependency list changes inside []
    // It samulate the componentDidMount function exist on class component, when the dependency list is empty
    useEffect(() => {
        console.log("- Here from useEffect hook ...");
    }, [count]) // Only re-run the effect if count changes

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