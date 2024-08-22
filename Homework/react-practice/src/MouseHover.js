import { useState } from "react";

const MouseHover = () => {

    //initializing the state variable
    const [bgcolor, setBgcolor] = useState("white");

    function handleMouseOver(){
        setBgcolor("blue");
    };

    function handleMouseOut(){
        setBgcolor("white");
    }

    return ( 
        // <button></button>


        <div
            style={{
              width: '100px',
              height: '50px',
              backgroundColor: bgcolor,
              border: '1px solid black',
              transition: 'background-color 0.3s ease'
            }}
            
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            
            >
              Hover over me!
        </div>
     );
}
 
export default MouseHover;