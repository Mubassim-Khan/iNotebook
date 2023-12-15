import React, { useContext } from 'react'
import noteContext from '../Context/notes/noteContext'
import { NoteItem } from './NoteItem';

export const Notes = () => {
    const context = useContext(noteContext);
    // eslint-disable-next-line
    const { notes, setNotes } = context;
    return (
        <div className="row my-3">
            <h3>Your Notes</h3>
            {notes.map((note) => {
                return <NoteItem key={note._id} note={note} />
            })}
        </div>
    )
}
