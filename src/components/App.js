import React from "react";

import AppHeader from "./AppHeader";
import ListNotes from "./ListNotes";
import { notesData } from "../utils/data";
import NoteForm from "./inputs/NoteForm";
import SearchForm from "./inputs/SearchForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: notesData(),
      keywords:""
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onAddHandler = this.onAddHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((item) => item.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    this.setState((prevState) => {
      const index = this.state.notes.findIndex((item) => item.id == id);
      return (prevState.notes[index].archived =
        !prevState.notes[index].archived);
    });
  }

  onSearchHandler({ keywords }) {
    this.setState((prevState) => {
      return {
        ...prevState,
        keywords 
      };
    });
  }

  onAddHandler({ title, body }) {
    this.setState((prevState) => {
      let note = {
        id: +new Date(),
        title,
        body,
        archived: false,
        createdAt: +new Date(),
      };

      return prevState.notes.unshift(note);
    });
  }

  render() {
    return (
      <div className="App">
        <AppHeader />

        <NoteForm addNote={this.onAddHandler} />

        <div className="container">
          <SearchForm searchNotes={this.onSearchHandler} />

          <ListNotes
            title="Notes"
            notes={
              this.state.notes
                .filter((item) => {
                  return item.archived === false;
                })
                .filter((item) => {
                  return item.title.toLowerCase().includes(this.state.keywords.toLowerCase());
                })
            }
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
            archived={false}
          />

          <ListNotes
            title="Archived"
            notes={
              this.state.notes
                .filter((item) => {
                  return item.archived === true;
                })
                .filter((item) => {
                  return item.title.toLowerCase().includes(this.state.keywords.toLowerCase());
                })
            }
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
            archived={true}
          />
        </div>
      </div>
    );
  }
}

export default App;
