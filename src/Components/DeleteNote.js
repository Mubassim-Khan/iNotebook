import React, { useContext, useRef } from 'react'
import noteContext from '../Context/notes/noteContext';

export const DeleteNote = (props) => {
    const context = useContext(noteContext);
    const { deleteNote, note, setNote } = context;

    const newref = useRef(null);
    const newrefClose = useRef(null);

    const handleDelete = (note) => {
        try {
            newrefClose.current.click();
            deleteNote(note.id);
            props.showAlertMsg("Note Deleted Successfully", "success");
        } catch (error) {
            console.log("Error deleting note:", error);
            props.showAlertMsg("Error deleting note. Please try again.", "danger");
        }
    };

    const delNote = (currentNoteId) => {
        try {
            newref.current.click();
            setNote({ id: currentNoteId._id });
        } catch (err) {
            console.log(err);
            console.log(currentNoteId)
        }
    };

    return (
        <>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" ref={newref} data-bs-target="#exampleModal"></button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                            <button ref={newrefClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={() => handleDelete(note)} >Delete Note</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
