import { useState } from "react";

const App = () => {
  // Store variable name
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });
  // Input field Text change
  const inputEvent = (event) => {
    setFullName((preVal) => {
      const {name, value} = event.target;
      return {
        ...preVal,
        [name]: value,
      }
    });
  }
  // Text color
  const txtColor = {
    color: "blue",
  }
    
    return(
        <>
          <h3>Form based on spread operator</h3>
          <input 
            type="text" 
            name="fname" 
            value={fullName.fname} 
            onChange={inputEvent} 
            placeholder="First Name"
            />

          <input 
            type="text"
            name="lname"
            value={fullName.lname}
            onChange={inputEvent}
            placeholder="Last Name"
          />

          <input 
            type="email" 
            name="email"
            value={fullName.email}
            onChange={inputEvent}
            placeholder="Email"
          />

          <input 
            type="phone"
            name="phone"
            value={fullName.phone}
            onChange={inputEvent}
            placeholder="Phone no."
          />

           <hr />
           <p> Full name: <span style={txtColor}>{fullName.fname}</span> & Last name: <span style={txtColor}>{fullName.lname}</span> </p>
           <p> Email ID: <span style={txtColor}> {fullName.email} </span> </p>
           <p> Phone no.: <span style={txtColor}> {fullName.phone} </span> </p>
        </>
    )
}
export default App;