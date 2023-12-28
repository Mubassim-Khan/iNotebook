import React, { useContext, useState } from 'react'
import noteContext from '../Context/notes/noteContext';
import "animate.css"
import TrackVisibility from "react-on-screen"

export const AddNote = (props) => {
    const context = useContext(noteContext);
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", description: "", tag: "" });
    // New content of note is added from Context (NoteState)
    const handleSubmit = (e) => {
        try {
            e.preventDefault();
            addNote(note.title, note.description, note.tag);
            setNote({ title: "", description: "", tag: "" });
            props.showAlertMsg("New Note Added Successfully", "success")
        } catch {
            props.showAlertMsg("Request Timed Out. Check your Internet Connection", "danger");
        }
    }
    // Set the title, description & tag of a new note
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    };

    return (
        <div className="container my-3 mt-3">
            <TrackVisibility>
                {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <h3 className='notes--title'>Add a Note</h3>
                    </div>
                }
            </TrackVisibility>

            <form className='my-3'>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label notes--field">Title</label>
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} autoComplete='off' onChange={onChange} minLength={3} required />
                    <div id="textHelp" className="form-text">*Title must be atleast 3 characters long.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label notes--field">Description</label>
                    <input type="text" className="form-control" id="description" name='description' value={note.description} autoComplete='off' onChange={onChange} minLength={5} required />
                    <div id="descriptionHelp" className="form-text">*Description must be atleast 5 characters long.</div>

                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label notes--field">Tag</label>
                    <input type="text" className="form-control" id="tag" name='tag' value={note.tag} autoComplete='off' onChange={onChange} />
                    <div id="emailHelp" className="form-text">Enter tag to easily categorize notes.</div>
                </div>
                <button disabled={note.title.length < 3 || note.description.length < 5} type="submit" className="btn btn-primary btn-block my-2 addnote--btn" onClick={handleSubmit}>Add Note</button>
            </form>
        </div>
    )
}
