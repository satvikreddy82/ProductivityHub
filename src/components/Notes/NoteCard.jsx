function NoteCard({ note, editNote, deleteNote }) {
  return (
    <div className="note-card">
      <p>{note.text}</p>

      <div className="note-actions">
        <button onClick={() => editNote(note.id)}>
          Edit
        </button>

        <button onClick={() => deleteNote(note.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default NoteCard;