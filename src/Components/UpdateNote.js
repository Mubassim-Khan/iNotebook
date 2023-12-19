import React, { useContext } from 'react'
import noteContext from '../Context/notes/noteContext';

export const UpdateNote = () => {
    const context = useContext(noteContext);
    const { note, setNote, refClose, ref, handleSubmit } = context;
    // State of note set with id & edited (title, description, tag) 
    // const [note, setNote] = useState({ id: "", Etitle: "", Edescription: "", Etag: "null" });

    // // Updated content of note is added & also closes model with ref to close btn
    // const handleSubmit = () => {
    //     editNote(note.id, note.Etitle, note.Etitle, note.Edescription);
    //     refClose.current.click();
    // }
    // Set the title, description & tag of updated note
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    // // useRef to populate the previous data fields
    // const ref = useRef("");
    // const refClose = useRef("");
    // // Function to update a note & set state of note with all 4 attributes
    // const updateNote = (currentNote) => {
    //     ref.current.click();
    //     setNote({ id: currentNote._id, Etitle: currentNote.title, Edescription: currentNote.description, Etag: currentNote.tag });
    // };

    return (
        <>
            <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" ref={ref} data-bs-target="#exampleModal"></button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {/* Form of Note */}
                            <form className='my-3'>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="Etitle" name="Etitle" aria-describedby="emailHelp" autoComplete='off' value={note.Etitle} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="Edescription" name='Edescription' autoComplete='off' value={note.Edescription} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="Etag" name='Etag' autoComplete='off' value={note.Etag} onChange={onChange} />
                                    <div id="emailHelp" className="form-text">Enter tag to easily categorize notes.</div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleSubmit}>Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
