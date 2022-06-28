import React from "react";
import NoteItem from "./NoteItem";

function ListNotes({ title, notes, onDelete, onArchive }) {
  return (
    <div id="listNotes">
      <h2 className="title">{title}</h2>

      {notes.length
        ? ListNotesItem(
            notes,
            onDelete,
            onArchive
          )
        : "not found"}
    </div>
  );

  function ListNotesItem(notes, onDelete, onArchive) {
    return notes.map((note) => (
      <NoteItem
        onDelete={onDelete}
        onArchive={onArchive}
        key={note.id}
        {...note}
      />
    ));
  }
}

export default ListNotes;
