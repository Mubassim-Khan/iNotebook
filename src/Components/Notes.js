import React, { useContext } from 'react'
import noteContext from '../Context/notes/noteContext'
import { NoteItem } from './NoteItem';
import { AddNote } from './AddNote';

export const Notes = () => {
    const context = useContext(noteContext);
    const { notes } = context;
    return (
        <>
        {/* Import new notes from AddNote component */}
            <AddNote />
            <div className="row my-3">
                <h3>Your Notes</h3>
                {notes.map((note) => {
                    return <NoteItem key={note._id} note={note} />
                })}
            </div>
        </>
    )
}
