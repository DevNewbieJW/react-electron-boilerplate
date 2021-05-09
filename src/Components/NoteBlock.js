import React, { Fragment } from "react";
import { Route, useParams } from "react-router-dom";

import Note from "./Note";
import Content from "./Content";
import { AppContext, makeId, useFirestoreCollection } from "./functions";
import { NoteRow, AddFolderButton, AddFolderContainer } from "./styles";

const NoteBlock = () => {
  const { notes } = React.useContext(AppContext);
  const { folderId } = useParams();
  const noteCollection = useFirestoreCollection("note-it");

  const filteredFolder = Object.values(notes)
    .filter((folder) => folder.id === folderId)
    .map((note) => note);

  const addNote = () => {
    const randomID = makeId();
    noteCollection.doc(folderId).set({
      ...filteredFolder[0],
      notes: {
        ...filteredFolder[0].notes,
        [randomID]: {
          name: "New Note",
          content: "foo",
          id: randomID,
        },
      },
    });
  };

  return (
    <Fragment>
      <NoteRow>
        {Object.entries(notes)
          .filter(([_, note]) => note.id === folderId)
          .map(([_, value]) =>
            Object.entries(value.notes).map(([key, note]) => (
              <Note key={key} folderId={folderId} note={note} />
            ))
          )}
        <AddFolderContainer>
          <AddFolderButton onClick={() => addNote()}>
            Add Folder
          </AddFolderButton>
        </AddFolderContainer>
      </NoteRow>
      <Route path='/:folderId/:noteId'>
        <Content />
      </Route>
    </Fragment>
  );
};

export default NoteBlock;
