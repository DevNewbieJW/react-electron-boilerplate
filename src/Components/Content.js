import React from "react";
import { useParams } from "react-router";

import { AppContext } from "./functions";

const Content = () => {
  const { notes } = React.useContext(AppContext);
  const { folderId, noteId } = useParams();
  return (
    <div
      style={{
        gridArea: "content",
        padding: "20px 5px",
        position: "relative",
        top: "5vh",
        width: "20vw",
      }}
    >
      {Object.entries(notes)
        .filter(([_, note]) => note.id === folderId)
        .map(([_, value]) =>
          Object.entries(value.notes)
            .filter(([_, note]) => note.id === noteId)
            .map(([key, note]) => <div key={key}>{note.content}</div>)
        )}
    </div>
  );
};

export default Content;
