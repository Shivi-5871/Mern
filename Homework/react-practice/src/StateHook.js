import { useState } from "react";

const StateHook = () => {
    
        // let name = "Shivi Agarwal";
        // let age = 21;

    //hookes k through dynamically runtime pr change krenge values with this type through HOOKS


    let [name, setName] = useState("Shivi Agarwal");
    let [age, setAge] = useState(21);


    function changeValue(){
        // console.log("Changing the values");
        // name = "ABD";
        // age = 20;
        // console.log(`Values changed to ${name} and ${age}`)
   

        //changing the values of name and age
        setName("ABD");
        setAge(20);
   
    };


    

    

    return ( 
        <section>

            <h2>This is a state Hook section</h2>
            
            <p>My name is {name} and I am {age} years</p>
            <button onClick={changeValue}>Click button</button>
            

        </section>
        
     );
}
 
export default StateHook;