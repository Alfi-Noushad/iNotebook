import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)
//------------------------------------------

  // Get all Notes
  const getNotes = async () => {
    // API 
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg1NjU0Zjc1NTA2ZDhjOGFkMmNlOGNjIn0sImlhdCI6MTc1MDQ4ODM0M30.7sURHnuLK7SeWkko5UgLjTZj6jy7f6p7JtWEBFgPnDE"
      }
    });
    const json = await response.json()
    console.log(json)
    setNotes(json)
  }
//-------------------------------------------------------------

  // Add a Note
  const addNote = async (title, description, tag) => {
    // API  
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg1NjU0Zjc1NTA2ZDhjOGFkMmNlOGNjIn0sImlhdCI6MTc1MDQ4ODM0M30.7sURHnuLK7SeWkko5UgLjTZj6jy7f6p7JtWEBFgPnDE"
      },
      body: JSON.stringify({title, description, tag})
    });
     

    console.log("Adding a new note")
    const note = {
      "_id": "61322f119553781a8ca8d0e08",
      "user": "6131dc5e3e4037cd4734a0664",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2021-09-03T14:20:09.668Z",
      "__v": 0
    };
    setNotes(notes.concat(note))
  }
//---------------------------------------------------


  // Delete a Note
  const deleteNote = async (id) => {
    //API

    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg1NjU0Zjc1NTA2ZDhjOGFkMmNlOGNjIn0sImlhdCI6MTc1MDQ4ODM0M30.7sURHnuLK7SeWkko5UgLjTZj6jy7f6p7JtWEBFgPnDE"
      }
    });
    const json = response.json();
    console.log(json)


    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }


  //-----------------------------------------
  
  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call 
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg1NjU0Zjc1NTA2ZDhjOGFkMmNlOGNjIn0sImlhdCI6MTc1MDQ4ODM0M30.7sURHnuLK7SeWkko5UgLjTZj6jy7f6p7JtWEBFgPnDE"
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = response.json();

    // Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }

    }
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )

}
export default NoteState;