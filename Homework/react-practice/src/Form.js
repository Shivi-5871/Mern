import{useState} from 'react';

const FormComponent = () => {

    let [nameOnForm, setNameOnForm] = useState("");
    let [email, setEmail] = useState("");

    return ( 
        <form>

            <label htmlFor="name">Name:</label>
            <input type="text" value={nameOnForm} onchange={handleNameChange} placeholder="Enter Your Name"/>
            
            <label htmlFor="name">Email:</label>
            <input type="email" value={email} onchange={handleEmailChange} placeholder="Enter Your Email"/>

            
        </form>
     );
}
 
export default FormComponent;