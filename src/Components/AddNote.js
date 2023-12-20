import React, { useContext, useState } from 'react'
import noteContext from '../Context/notes/noteContext';

export const AddNote = (props) => {
    const context = useContext(noteContext);
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", description: "", tag: "" });
    // New content of note is added from Context (NoteState)
    const handleSubmit = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" });
        props.showAlertMsg("New Note Added Successfully", "success")
    }
    // Set the title, description & tag of a new note
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    };

    return (
        <div className="container my-3 mt-3">
            <h3>Add a Note</h3>
            <form className='my-3'>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} autoComplete='off' onChange={onChange} minLength={3} required />
                    <div id="textHelp" className="form-text">*Title must be atleast 3 characters long.</div>

                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name='description' value={note.description} autoComplete='off' onChange={onChange} minLength={5} required />
                    <div id="descriptionHelp" className="form-text">*Description must be atleast 5 characters long.</div>

                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" name='tag' value={note.tag} autoComplete='off' onChange={onChange} />
                    <div id="emailHelp" className="form-text">Enter tag to easily categorize notes.</div>
                </div>
                <button disabled={note.title.length < 3 || note.description.length < 5} type="submit" className="btn btn-primary" onClick={handleSubmit}>Add Note</button>
            </form>
        </div>
    )
}
