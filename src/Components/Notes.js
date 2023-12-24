import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../Context/notes/noteContext'
import { NoteItem } from './NoteItem';
import { AddNote } from './AddNote';
import { useNavigate } from 'react-router';
import { DeleteNote } from './DeleteNote';
import "animate.css"
import TrackVisibility from "react-on-screen"

export const Notes = (props) => {
    // To update Top Loading Bar and change Title of tab 
    const updateProgress = () => {
        props.setProgress(100);
        document.title = "Your Notes - iNotebook";
    }
    let navigate = useNavigate();
    const context = useContext(noteContext);
    const { notes, fetchNotes, editNote, deleteNote } = context;
    // Function call using useEffect
    useEffect(() => {
        updateProgress();
        // eslint-disable-next-line react-hooks/exhaustive-deps

        if (localStorage.getItem("token")) {
            fetchNotes();
        } else {
            navigate("/login");
        }
        // eslint-disable-next-line
    }, []);
    // State of note set with id & edited (title, description, tag) 
    const [note, setNote] = useState({ id: "", Etitle: "", Edescription: "", Etag: "" });

    // Updated content of note is added & also closes model with ref to close btn
    const handleSubmit = () => {
        editNote(note.id, note.Etitle, note.Edescription, note.Etag);
        refClose.current.click();
        props.showAlertMsg("Note Updated Successfully", "success")
    }
    // Set the title, description & tag of updated note
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    // useRef to populate the previous data fields
    const ref = useRef("");
    const refClose = useRef("");
    // Function to update a note & set state of note with all 4 attributes
    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({ id: currentNote._id, Etitle: currentNote.title, Edescription: currentNote.description, Etag: currentNote.tag });
    };

    const handleDelete = () => {
        deleteNote(note._id);
        props.showAlertMsg("Note Deleted Successfully", "success");
    };

    return (
        <>
            {/* Import new notes from AddNote component */}
            <AddNote showAlertMsg={props.showAlertMsg} />

            {/*  Modal to Update Note  */}
            <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" ref={ref} data-bs-target="#exampleModal"></button>
            <div className="modal fade mt-3" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 notes--title" id="exampleModalLabel">Edit Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {/* Form of Note */}
                            <form className='my-3'>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label notes--field">Title</label>
                                    <input type="text" className="form-control" id="Etitle" name="Etitle" aria-describedby="emailHelp" autoComplete='off' value={note.Etitle} onChange={onChange} minLength={3} required />
                                    <div id="textHelp" className="form-text">*Title must be atleast 3 characters long.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label notes--field">Description</label>
                                    <input type="text" className="form-control" id="Edescription" name='Edescription' autoComplete='off' value={note.Edescription} onChange={onChange} minLength={5} required />
                                    <div id="descriptionHelp" className="form-text">*Description must be atleast 5 characters long.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label notes--field">Tag</label>
                                    <input type="text" className="form-control" id="Etag" name='Etag' autoComplete='off' value={note.Etag} onChange={onChange} />
                                    <div id="emailHelp" className="form-text">Enter a tag to easily categorize notes.</div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.Etitle.length < 3 || note.Edescription.length < 5} type="button" className="btn btn-primary" onClick={handleSubmit}>Update Note</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <DeleteNote showAlertMsg={props.showAlertMsg} /> */}
            {/* 
            <div className="modal" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Delete Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Are you sure you want to delete note?</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleDelete} >Delete Note</button>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="row my-3">
                <TrackVisibility>
                    {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                            <h3 className='notes--title mt-3 mb-2'>Your Notes</h3>
                        </div>
                    }
                </TrackVisibility>
                <div className="container mx-1 my-1">
                    {notes.length === 0 && "No notes to display, Please add a note."}
                </div>
                {notes.map((note) => {
                    return <NoteItem key={note._id} updateNote={updateNote} note={note} showAlertMsg={props.showAlertMsg} />
                })}
            </div>
        </>
    )
}
