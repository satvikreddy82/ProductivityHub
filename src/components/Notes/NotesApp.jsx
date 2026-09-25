import { useState, useEffect } from "react";
import NoteCard from "./NoteCard";


function NotesApp() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const [noteInput, setNoteInput] = useState("");
  const [editingId, setEditingId] = useState(null);

  // Save notes to localStorage whenever notes change
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // Add a new note
  const addNote = () => {
    if (noteInput.trim() === "") {
      return;
    }

    const newNote = {
      id: Date.now(),
      text: noteInput,
    };

    setNotes([...notes, newNote]);
    setNoteInput("");
  };

  // Start editing a note
  const editNote = (id) => {
    const noteToEdit = notes.find((note) => note.id === id);

    setNoteInput(noteToEdit.text);
    setEditingId(id);
  };

  
  const saveEdit = () => {
    if (noteInput.trim() === "") {
      return;
    }

    setNotes(
      notes.map((note) =>
        note.id === editingId
          ? { ...note, text: noteInput }
          : note
      )
    );

    setNoteInput("");
    setEditingId(null);
  };


  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
   <section id="notes" className="notes-section">
  <div className="section-header">
    <h2>My Notes</h2>
    <p>Capture your ideas and thoughts.</p>
  </div>

  <div className="note-form">
    <input
      type="text"
      placeholder="Write a note..."
      value={noteInput}
      onChange={(event) => setNoteInput(event.target.value)}
    />

    <button onClick={editingId === null ? addNote : saveEdit}>
      {editingId === null ? "Add Note" : "Save"}
    </button>
  </div>

  <div className="notes-list">
    {notes.map((note) => (
      <NoteCard
        key={note.id}
        note={note}
        editNote={editNote}
        deleteNote={deleteNote}
      />
    ))}
  </div>
</section>
  );
}

export default NotesApp;