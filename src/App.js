import { useEffect, useState } from "react";

const App = () => {
    // Store The main width of the window
    const [widthCount, setWidthCount] = useState(window.screen.width);
    // Width change based on window resize
    const actualWidth = () => {
      // Store the change width of width after resize
      setWidthCount(window.innerWidth);
      console.log(window.innerWidth);
    }
   
    useEffect(() => {
      // Inspect Element Tab -> Event Listeners
        // Addng to memory 
        window.addEventListener("resize", actualWidth);
        
        return () => {
          // Removing from memory 
          window.removeEventListener("resize", actualWidth);
        }
    })
    return(
        <>
         <h3>Cleanup Function</h3>
         <p> {widthCount} </p>
        </>
    )
}
export default App;