import { useState } from "react";

const App = () => {
    const [name, setName] = useState("Gnag");
    const [txtSub, setTxtSub] = useState("");
    // On input field change
    const InputEvent = (event) => {
      setName(event.target.value);
    }
    // On click of btn
    const onSubmit = () => {
      setTxtSub(name);
    }
    // Txt color
    const txtColor = {
      color: "blue"
    }
    return(
        <>
          <h3>Form Submit onClick</h3>
          <input type="text" value={name} onChange={InputEvent} /> 
          <br /><br />
          <button onClick={onSubmit}>Submit</button>
          <hr />
          <p> Before Submit: <span style={txtColor}>{name}</span>  & 
          Text After submit btn clicked: <span style={txtColor}>{txtSub}</span>  </p>
        </>
    )
}
export default App;