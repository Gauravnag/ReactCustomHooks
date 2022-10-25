
const InputOption = ({dropVal}) => {
    return(
        <>
           { <p key={dropVal.id}> {dropVal.name} </p>}
        </>
    )
}
export default InputOption;