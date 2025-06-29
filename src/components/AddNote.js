import React, {useContext, useState} from 'react'
import noteContext from "../context/notes/noteContext"

const AddNote = () => {

    const context = useContext(noteContext);
    const {addNote} = context;

    const [note, setNote] = useState({title: "", description: "", tag: "default"})

    const clkHandle = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
    }

     const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value})
    }


    return (
        <div>
            <div className='container my-3'>
                <h2>Add a Note</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name="title" onChange={onChange}  />
                    </div> 
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description1" name="description" onChange={onChange} />
                    </div>
                  
                    <button type="submit" className="btn btn-primary" onClick={clkHandle}>Add Note</button>
                </form>
            </div>
        </div>
    )
}

export default AddNote
