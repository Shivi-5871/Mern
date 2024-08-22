import { useState } from "react";

const BackgroundColor = () => {

    let [bgColor, setBgColor] = useState("white");

    const handleBgColor = () => {
        setBgColor(prevColor => prevColor === "white" ? "yellow" : "white");
    };

    return ( 
        <div style ={{ backgroundColor : bgColor }}>
            <h2>Background color change</h2>
            <button onClick={handleBgColor}>{bgColor === "white" ? "Change Bg Color" : "Remove Bg Color"}Change Bg Color</button>
        </div>
     );
}
 
export default BackgroundColor;