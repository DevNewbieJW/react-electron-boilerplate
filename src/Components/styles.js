import styled from "styled-components";
import { Link } from "react-router-dom";

export const GridContainer = styled.div({
  display: "grid",
  width: "100vw",
  height: "100vh",
  gridTemplateColumns: "25fr 25fr 50fr",
  gridTemplateRows: "95vh",
  gridTemplateAreas: `"folders notes content"`,
  backgroundColor: "#3C373F",
});

export const Toolbar = styled.div({
  width: "100vw",
  position: "absolute",
  top: 0,
  height: "5vh",
  backgroundColor: "#584b4f",
  display: "flex",
  flexDirection: "reverse-row",
  justifyContent: "center",
  alignItems: "center",
});

export const FolderRow = styled.div({
  gridArea: "folders",
  padding: "20px 5px",
  position: "relative",
  top: "5vh",
  width: "20vw",
});

export const FolderInputRow = styled.div({
  width: "100%",
  "&:hover": {
    backgroundColor: "#46404a",
  },
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  marginBottom: "5px",
});

export const FolderInput = styled.input(({ disabled }) => ({
  background: "transparent",
  border: "none",
  fontWeight: disabled && 400,
  color: disabled ? "black" : "black",
  fontSize: "18px",
  width: "100%",
}));

export const FolderLink = styled(Link)({
  color: "black",
  ":active": {
    color: "black",
  },
  fontSize: "18px",
  height: "16px",
  textDecoration: "none",
  width: "100%",
});

export const EditFolderName = styled.div({
  fontSize: "16px",
  cursor: "pointer",
});
export const AddFolderContainer = styled.div({
  position: "absolute",
  height: "10vh",
  width: "25vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  bottom: "0",
});

export const AddFolderButton = styled.button({
  height: "50%",
  width: "15vw",
  fontFamily: "monospace",
  fontWeight: "bold",
});

export const NoteRow = styled.div({
  gridArea: "notes",
  padding: "20px 5px",
  position: "relative",
  top: "5vh",
  width: "20vw",
});

export const NoteInputRow = styled.div({
  width: "100%",
  "&:hover": {
    backgroundColor: "#46404a",
  },
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  marginBottom: "5px",
});

export const NoteInput = styled.input(({ disabled }) => ({
  background: "transparent",
  border: "none",
  fontWeight: disabled && 400,
  color: disabled ? "black" : "black",
  fontSize: "18px",
  width: "100%",
}));

export const EditNoteName = styled.div({
  fontSize: "16px",
  cursor: "pointer",
});

export const NoteLink = styled(Link)({
  color: "black",
  ":active": {
    color: "black",
  },
  fontSize: "18px",
  height: "16px",
  textDecoration: "none",
  width: "100%",
});
