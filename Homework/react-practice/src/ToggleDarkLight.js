import { useState } from 'react';


const LightAndDark = () => {

    //initialize state variable
    const [bgColor, setColor] = useState("white");


    function handleToggleEvent(){
        setColor(prevColor => prevColor === "white" ? "black" : "white");
    }

    return (
        <div  style={{ backgroundColor: bgColor }}>
            <button onClick={handleToggleEvent}>{bgColor === "white" ? 'black' : 'white'} Paragraph</button>
        </div>
    );
};
 
export default LightAndDark;