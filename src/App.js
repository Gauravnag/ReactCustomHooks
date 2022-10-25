import { useEffect, useState } from "react";
import InputField from "./InputField";
import InputOption from "./InputOption";

const Input_1 = () => {
    const [user, setUser] = useState([]);
    const [inputVal, setInputVal] = useState("");

    const getData = async() => {
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        const resp = await data.json();
        setUser(resp);
    }

    const inputEvent = (event) => {
        setInputVal(event.target.value);
    }

    useEffect(() => {
        getData();
    }, [])

    return(
        <>
            <h2>Input Data Fetch</h2>
            <InputField inputEvent={inputEvent} />
            {
                user.filter((curr) => {
                    if(inputVal === "") {
                        return user;
                    } else if(curr.name.toLowerCase().includes(inputVal.toLowerCase())) {
                        return curr;
                    }
                })
                .map((curr, id) => {
                    {/* return(
                            <p key={id}> {curr.name} </p>
                    ) */}
                   return <InputOption dropVal={curr} {...curr} />
                })
            }
        </>
    )
}
export default Input_1;