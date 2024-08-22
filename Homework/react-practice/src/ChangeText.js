import { useState } from "react";

const ChangeText = () => {

    let [text, setText] = useState("This is a paragraph");

    function changeText(){
        setText("This is a new paragraph");
    };

    return ( 
        <div>
            <p>Heyyyyyyyy, {text}</p>
            <button onClick={changeText}>Click button</button>
        </div>
     );
}
 
export default ChangeText;