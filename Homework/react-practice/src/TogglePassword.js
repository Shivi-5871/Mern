import { useState } from "react";

const TogglePassword = () => {

    const [isVisible, setIsVisible] = useState(false);

    function TogglePasswordVisibility() {
        setIsVisible(prevState => !prevState);
    }
    
    return ( 
        <section>
            <h2>Toggle Password</h2>
            <input type={isVisible? "text" : "password"} />
            <button onClick={TogglePasswordVisibility}>{isVisible ? "Hide Password" : "Show Password"}</button>
        </section>
     );
}
 
export default TogglePassword;