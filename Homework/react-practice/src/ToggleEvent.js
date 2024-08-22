import { useState } from 'react';


const ToggleEvent = () => {

    //initialize state variable
    const [isVisible, setIsVisible] = useState(true);


    function handleToggleEvent(){
        setIsVisible(!isVisible);
    }

    return (
        <div>
            <button onClick={handleToggleEvent}>{isVisible ? 'Hide' : 'Show'} Paragraph</button>
            {isVisible && <p>This is the paragraph that can be toggled.</p>}
        </div>
    );
};
 
export default ToggleEvent;





    

