import { useState } from "react";

const BasicCounter = () => {

    let [count, setCount] = useState(0);
    function countUp() {
        console.log('clicked!');
        setCount(count + 1);
    }

    return ( 
        <section>
            <h2>Basic Counter</h2>
            <p>Current count: {count}</p>
            <button onClick={countUp}>Increment</button>
        </section>
     );
}
 
export default BasicCounter;