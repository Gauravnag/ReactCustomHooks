import { useState } from "react";

const App = () => {
  // Store variable name
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });
  const [records, setRecords] = useState([]);
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
  // Submit Button
  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = {...fullName, id: new Date().getTime().toString() }
    setRecords([...records, newRecord]);
  }
    
    return(
        <>
          <h3>Form based on spread operator</h3>
          <form onSubmit={handleSubmit}>
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
            <button type="submit">Submit</button>
          </form>

           <hr />
           {
            records.map((curr) => {
              const { fname, lname, email, phone } = curr;
              return(
                <div key={curr.id}>
                  <p> First name: <span style={txtColor}>{fname}</span> & 
                      Last name: <span style={txtColor}> {lname} </span></p>
                  <p> Email: <span style={txtColor}> {email} </span> </p>
                  <p> Phone: <span style={txtColor}> {phone} </span> </p>
                </div>
              )
            })
           }
        </>
    )
}
export default App;