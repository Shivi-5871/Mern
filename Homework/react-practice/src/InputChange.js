import { useState } from "react";


const InputChange = () => {

    let [text1, setTexts] = useState("This is a paragraph");

    function handleInputChange(event){  
        setTexts(event.target.value);
    };


    return ( 
        <div>
            <p>On Typing Input Change</p>
            <input type="text" onChange={handleInputChange} />
            <p>Current Input: {text1}</p>
        </div>
     );
}
 
export default InputChange;