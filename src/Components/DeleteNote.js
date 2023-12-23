import React, { useContext } from 'react'
import noteContext from '../Context/notes/noteContext';

export const DeleteNote = (props) => {
    const context = useContext(noteContext);
    const { deleteNote, note } = context;
    const handleDelete = () => {
        deleteNote(note._id);
        props.showAlertMsg("Note Deleted Successfully", "success");
    };

    return (
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
        </div>
    )
}
