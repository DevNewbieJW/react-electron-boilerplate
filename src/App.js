import React from "react";
import { Route, useLocation } from "react-router-dom";

import { useCollectionData } from "react-firebase-hooks/firestore";

import NoteBlock from "./Components/NoteBlock";
import Folder from "./Components/Folder";
import { useFirestoreCollection, makeId } from "./Components/functions";
import {
  FolderRow,
  GridContainer,
  Toolbar,
  AddFolderButton,
  AddFolderContainer,
} from "./Components/styles";
import { AppContext } from "./Components/functions";

const App = () => {
  const noteCollection = useFirestoreCollection("note-it");
  const [snapshot = [], isLoading, error] = useCollectionData(noteCollection);
  const location = useLocation();

  const ContextValue = React.useMemo(
    () => ({
      notes: snapshot,
    }),
    [snapshot]
  );

  const addFolder = () => {
    const randomID = makeId();
    noteCollection.doc(randomID).set({
      name: "New Folder",
      notes: {},
      id: randomID,
    });
  };

  if (isLoading) {
    return null;
  }

  if (error) {
    throw new Error(error);
  }

  return (
    <AppContext.Provider value={ContextValue}>
      <GridContainer>
        <Toolbar>{location.pathname}</Toolbar>
        <FolderRow>
          {Object.entries(snapshot).map(([key, value]) => (
            <Folder key={key} value={value} />
          ))}
          <AddFolderContainer>
            <AddFolderButton onClick={() => addFolder()}>
              Add Folder
            </AddFolderButton>
          </AddFolderContainer>
        </FolderRow>
        <Route path='/:folderId'>
          <NoteBlock />
        </Route>
      </GridContainer>
    </AppContext.Provider>
  );
};

export default App;
