import Input from "./Input";

function AddProject(){
    return <>
        <div>
            <menu>
                <li><button>Cancel</button></li>
                <li><button>Save</button></li>
            </menu>
            
        </div>
        <div>
            <Input label="TITLE" type="text" />
            <Input label="DESCRIPTION" textarea />
            <Input label="DUE DATE" type="date"/>
        </div>
    </>;
}

export default AddProject;