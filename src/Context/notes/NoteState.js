import { useState } from "react";
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
            console.log(json)
            setNotes(json);
        } catch (err) {
            console.log(err)
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
        const json = await response.json();
        console.log(json)
        console.log("A new note added")

        // Method for concatinating notes JSON 
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
    const editNote = async (id, title, description, tag) => {
        // API Call
        const response = await fetch(`${hostURL}/api/notes/updatenote/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU3NjE3OGJlOTBhMjMwMzJmMDJkOWEyIn0sImlhdCI6MTcwMjMyMTkxNn0.F0r7uvYuQK-l5NOHpHIO_tRtACFum51kPOo_R-bL4dY"
            },
            body: JSON.stringify({ title, description, tag }),
        });
        const json = await response.json();
        console.log(json)

        // Logic for editing a Note
        for (let i = 0; i < notes.length; i++) {
            const element = notes[i];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
        }
    }

    // Delete a Note
    const deleteNote = (id) => {
        console.log("Deleting note with id: " + id);
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes);
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, editNote, deleteNote, fetchNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;