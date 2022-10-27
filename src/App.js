import useFetch from "./useFetch";

const App = () => {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos/");
    // const [data] = useFetch("https://jsonplaceholder.typicode.com/todos/1");
    console.log(data)
    return(
        <>
           <h2>This is Custom Hook</h2>
             {/* { <p> {data.title} </p> }  */}
            <h4>Loop</h4> 
             {
              data.map((curr) => {
                return(
                  <div key={curr.id}>
                    <p> {curr.title} </p>
                  </div>
                )
              })
            } 
        </>
    )
}
export default App;