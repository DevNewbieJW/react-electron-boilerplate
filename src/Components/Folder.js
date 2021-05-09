import React from "react";

import {
  EditFolderName,
  FolderInput,
  FolderInputRow,
  FolderLink,
} from "./styles";

const Folder = ({ value }) => {
  const [input, setInput] = React.useState("");
  const [edit, setEdit] = React.useState(false);

  React.useEffect(() => {
    setInput(value.name);
  }, [value.name]);

  return (
    <FolderInputRow>
      <div
        style={{
          width: "70%",
        }}
      >
        {edit ? (
          <FolderInput
            value={input}
            onChange={(event) => setTimeout(event.target.value)}
            disabled={!edit}
          />
        ) : (
          <FolderLink to={`/${value.id}`}>{input}</FolderLink>
        )}
      </div>
      {edit ? (
        <EditFolderName onClick={() => setEdit(false)}>Save</EditFolderName>
      ) : (
        <EditFolderName onClick={() => setEdit(true)}>Edit</EditFolderName>
      )}
    </FolderInputRow>
  );
};

export default Folder;
