import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [expand, setExpand] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
    Image: "",
    Price: Number,
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
      Image: "",
      Price: Number,
    });
    event.preventDefault();
  }
  function expanded() {
    setExpand(true);
  }

  return (
    <div>
      <form className="create-note">
        {expand ? (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Pizza Name"
          />
        ) : null}
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Description..."
          rows={expand ? "3" : "1"}
          onClick={() => {
            expanded();
          }}
        />
        {expand ? (
          <input
            name="Image"
            onChange={handleChange}
            value={note.Image}
            placeholder="Insert Image URL"
            onClick={() => {
              expanded();
            }}
          />
        ) : null}
        {expand ? (
          <input
            name="Price"
            onChange={handleChange}
            value={note.Price}
            placeholder="Insert Price"
            onClick={() => {
              expanded();
            }}
          />
        ) : null}
        <Zoom in={expand}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
