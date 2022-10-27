import { useState } from "react";

const Accordion = ({question, answer}) => {
    const [accData, setAccData] = useState(false);
    const quiz =() => {
        setAccData(!accData);
    }
    return (
        <>
            <p onClick={quiz}> {accData ? "-" : "+"} {question} </p>
            <p> { accData && answer} </p>
        </>
    )
}
export default Accordion;