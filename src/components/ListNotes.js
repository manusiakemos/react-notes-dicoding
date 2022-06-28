import React from "react";
import NoteItem from "./NoteItem";

function ListNotes({ title, notes, onDelete, onArchive }) {
  return (
    <div id="listNotes">
      <h2 className="title text-center">{title}</h2>

      <div className="listNotesWrapper">
      {notes.length
        ? ListNotesItem(
            notes,
            onDelete,
            onArchive
          )
        : "not found"}
      </div>
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
