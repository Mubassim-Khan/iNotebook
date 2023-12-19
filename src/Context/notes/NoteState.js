import { useRef, useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const hostURL = "http://localhost:8000";
    const initialNotes = [];
    const [notes, setNotes] = useState(initialNotes);

    // Fetch all Notes
    const fetchNotes = async () => {
        // API Call
        try {
            const response = await fetch(`${hostURL}/api/notes/fetchnotes`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU3NjE3OGJlOTBhMjMwMzJmMDJkOWEyIn0sImlhdCI6MTcwMjMyMTkxNn0.F0r7uvYuQK-l5NOHpHIO_tRtACFum51kPOo_R-bL4dY"
                },
            });
            const json = await response.json();
            setNotes(json);
        } catch (err) {
            console.log(err);
        }
    };

    // Add a Note
    const addNote = async (title, description, tag) => {
        // API Call
        const response = await fetch(`${hostURL}/api/notes/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU3NjE3OGJlOTBhMjMwMzJmMDJkOWEyIn0sImlhdCI6MTcwMjMyMTkxNn0.F0r7uvYuQK-l5NOHpHIO_tRtACFum51kPOo_R-bL4dY"
            },
            body: JSON.stringify({ title, description, tag })
        });
        const note = await response.json();
        // Method for concatinating notes JSON 
        setNotes(notes.concat(note));
    }

    // Edit a Note
    const editNote = async (id, title, description, tag) => {
        // API Call
        const response = await fetch(`${hostURL}/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU3NjE3OGJlOTBhMjMwMzJmMDJkOWEyIn0sImlhdCI6MTcwMjMyMTkxNn0.F0r7uvYuQK-l5NOHpHIO_tRtACFum51kPOo_R-bL4dY"
            },
            body: JSON.stringify({ title, description, tag }),
        });
        const json = await response.json();
        // A new variable to set the state according to the JSON (notes)
        const newNotes = JSON.parse(JSON.stringify(notes));
        // Logic for editing a Note
        for (let i = 0; i < newNotes.length; i++) {
            const element = newNotes[i];
            if (element._id === id) {
                newNotes[i].title = title;
                newNotes[i].description = description;
                newNotes[i].tag = tag;
                break;
            }
        }
        setNotes(newNotes);
    }

    // Delete a Note
    const deleteNote = async (id) => {
        // API Call
        const response = await fetch(`${hostURL}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU3NjE3OGJlOTBhMjMwMzJmMDJkOWEyIn0sImlhdCI6MTcwMjMyMTkxNn0.F0r7uvYuQK-l5NOHpHIO_tRtACFum51kPOo_R-bL4dY"
            },
        });
        const json = await response.json();
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes);
    }

    // -----

    // const [note, setNote] = useState({ id: "", Etitle: "", Edescription: "", Etag: "null" });

    // const refClose = useRef("");
    // const ref = useRef("");

    // const handleSubmit = () => {
    //     editNote(note.id, note.Etitle, note.Etitle, note.Edescription);
    //     refClose.current.click();
    // }

    // const updateNote = (currentNote) => {
    //     ref.current.click();
    //     setNote({ id: currentNote._id, Etitle: currentNote.title, Edescription: currentNote.description, Etag: currentNote.tag });
    // };

    // <NoteContext.Provider value={{ notes, addNote, editNote, deleteNote, fetchNotes, handleSubmit, updateNote, refClose, setNote, note }}>

    return (
        <NoteContext.Provider value={{ notes, addNote, editNote, deleteNote, fetchNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;