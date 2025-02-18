import DefaultPageImage from "../assets/no-projects.png"
function DefaultPage({onClick}){
    return <>
        <img src={DefaultPageImage} className="px-60"/>
        <p>
            <h2>No Project Selected</h2>
        </p>
        <p>
            Select a Project or get started with a new one
        </p>
        <button onClick={onClick}>Create new Project</button>
    </>
}

export default DefaultPage;