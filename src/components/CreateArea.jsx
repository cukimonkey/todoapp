import { useState } from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';




function CreateArea (props) {

    const [isExpanded, setExpended] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: ""

    });
    
    function handleChange(event) {
        console.log(event.target)
        const {name, value} = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: '',
            content: ''
        });
        event.preventDefault();
    }

    function expand(){
        setExpended(true);
    }


    return(
        <div>
            <form className="create-note">
                {isExpanded && (<input 
                type='text' 
                name='title' 
                onChange={handleChange}
                value={note.title}
                placeholder='Title' 
                />

                )}
                

                <textarea 
                name='content'
                rows={isExpanded ?3 : 1}
                onClick={expand}
                onChange={handleChange}
                value={note.content}
                placeholder='Take a note...'
                />
                <Fab onClick={submitNote}>
                    <AddIcon />
                </Fab>
            </form>
        </div>
    );
}

export default CreateArea;