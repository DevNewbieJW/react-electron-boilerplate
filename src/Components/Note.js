import React from "react";

import {
  EditFolderName,
  EditNoteName,
  NoteInput,
  NoteInputRow,
  NoteLink,
} from "./styles";

const Note = ({ note, folderId }) => {
  const [input, setInput] = React.useState("");
  const [edit, setEdit] = React.useState(false);

  React.useEffect(() => {
    setInput(note.name);
  }, [note.name]);

  return (
    <NoteInputRow>
      <div style={{ width: "70%" }}>
        {edit ? (
          <NoteInput
            value={input}
            onChange={(event) => setInput(event.target.value)}
            disabled={!edit}
          />
        ) : (
          <NoteLink to={`/${folderId}/${note.id}`}>{input}</NoteLink>
        )}
      </div>
      {edit ? (
        <EditNoteName onClick={() => setEdit(false)}>Save</EditNoteName>
      ) : (
        <EditFolderName onClick={() => setEdit(true)}>Edit</EditFolderName>
      )}
    </NoteInputRow>
  );
};

export default Note;
