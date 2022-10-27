import { useState } from "react";
import Api from "./Api";
import Accordion from "./Accordion";

const App = () => {
    const [data, setData] = useState(Api);
    return(
        <>
          <h3>Accordion</h3>
          {
            data.map((curr) => {
              return <Accordion key={curr.id} {...curr} />
            })
          }
        </>
    )
}
export default App;