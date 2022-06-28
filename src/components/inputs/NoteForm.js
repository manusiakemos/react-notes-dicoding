import React from "react";

class NoteForm extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      title: "",
      body: "",
      message:{
        charLeftTitle : '',
      },
      errors:{
        title: true
      }
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState((prevState) => {
      let charLimitTitle = 50;
      let error = event.target.value.length == charLimitTitle;

      if(event.target.value.length > charLimitTitle){
        event.target.value = prevState.title;
      }

      return {
        ...prevState,
        title: event.target.value,
        message:{
          charLeftTitle : charLimitTitle - event.target.value.length + ' characters left'
        },
        errors: {
          title : error
        }
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    if(this.state.errors.title === false){
      this.props.addNote(this.state);
      this.setState((prevState) => {
        return {
          ...prevState,
          message:{
            charLeftTitle : ""
          },
          title: "",
          body: "",
        };
      });
    }else{
      alert('limit character');
    }
  }

  render() {
    return (
      <form
        id="noteForm"
        className="container"
        onSubmit={this.onSubmitEventHandler}
      >
        <h4 className="title">Take a note</h4>
        <input
          type="text"
          className="form-control search-input"
          placeholder="Title"
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
        />

        <span className="info">{ this.state.message.charLeftTitle }</span>

        <textarea
          rows="3"
          className="form-control"
          placeholder="Take a note"
          value={this.state.body}
          onChange={this.onBodyChangeEventHandler}
        />
        <button className="btn" type="submit">
          <span>Add Note </span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"/></svg>
        </button>
      </form>
    );
  }
}

export default NoteForm;
