import { useState } from "react";
import useTitle from "./useTitle";

const Test = () => {
    const [count, setCount] = useState(0);
    // Custom Hook
    useTitle(count);

    return(
        <>
        <h3> {count} </h3>
        <button onClick={() => setCount(count + 1) }>Click Here</button>
        <hr />
        <p>Two Different components</p>
        </>
    )
}
export default Test;