import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const initialNotes = [
        {
            "_id": "6579af5d8ca542e15f5d4db9",
            "user": "6576178be90a23032f02d9a2",
            "title": "New note 69",
            "description": "New note is added",
            "tag": "personal",
            "date": "2023-12-13T13:19:25.521Z",
            "__v": 0
        },
        {
            "_id": "6579f30249dda5c2ea527274",
            "user": "6576178be90a23032f02d9a2",
            "title": "Mubassim testing note updated after integration",
            "description": "This note is updated once again on 13/12 to test",
            "tag": "testing",
            "date": "2023-12-13T18:08:02.598Z",
            "__v": 0
        },
        {
            "_id": "6579f30249dda5c2ea5272741",
            "user": "6576178be90a23032f02d9a2",
            "title": "Mubassim testing note updated after integration",
            "description": "This note is updated once again on 13/12 to test",
            "tag": "testing",
            "date": "2023-12-13T18:08:02.598Z",
            "__v": 0
        },
        {
            "_id": "6579af5d8ca542e15f5d4db91",
            "user": "6576178be90a23032f02d9a2",
            "title": "New note 69",
            "description": "New note is added",
            "tag": "personal",
            "date": "2023-12-13T13:19:25.521Z",
            "__v": 0
        },
        {
            "_id": "6579f30249dda5c2ea5272742",
            "user": "6576178be90a23032f02d9a2",
            "title": "Mubassim testing note updated after integration",
            "description": "This note is updated once again on 13/12 to test",
            "tag": "testing",
            "date": "2023-12-13T18:08:02.598Z",
            "__v": 0
        },
        {
            "_id": "6579af5d8ca542e15f5d4db92",
            "user": "6576178be90a23032f02d9a2",
            "title": "New note 69",
            "description": "New note is added",
            "tag": "personal",
            "date": "2023-12-13T13:19:25.521Z",
            "__v": 0
        },
        {
            "_id": "6579f30249dda5c2ea5272743",
            "user": "6576178be90a23032f02d9a2",
            "title": "Mubassim testing note updated after integration",
            "description": "This note is updated once again on 13/12 to test",
            "tag": "testing",
            "date": "2023-12-13T18:08:02.598Z",
            "__v": 0
        }
    ]

    const [notes, setNotes] = useState(initialNotes);

    // Add a Note
    const addNote = (title, description, tag) => {
        console.log("A new note added")
        let note = {
            "_id": "6579f30249dda5c2ea5272743889",
            "user": "6576178be90a23032f02d9a2",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-12-13T18:08:02.598Z",
            "__v": 0
        };
        setNotes(notes.concat(note));
    }
    // Edit a Note
    const editNote = (id, title, description, tag) => {
        
    }

    // Delete a Note
    const deleteNote = (id) => {
        console.log("Deleting note with id: " + id);
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes);
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, editNote, deleteNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;