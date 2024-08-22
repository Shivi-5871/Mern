import { useState } from "react";

const UserInputChange = () => {
  let [name, setName] = useState(" ");
  let [age, setAge] = useState(" ");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleAgeChange(event) {
    setAge(event.target.value);
  }

  return (
    <div>
      <h2>On Typing Name and Age Change</h2>
      <label>Type your Name:</label>
      <input type="text" onChange={handleNameChange} />
    <br />
     
      <label>Type your Age:</label>
      <input type="text" onChange={handleAgeChange} />

      <p>Name is : "{name}" and Age is : "{age}"</p>
    </div>
  );
};

export default UserInputChange;
