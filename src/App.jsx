import { Box, Container } from "@mui/material";
import "./App.css";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },

  "&:last-child td, &:last-child th": {
    border: 0,
  },
  "&:hover": {
    backgroundColor: "grey",
  },
}));

function createData(name) {
  return { name };
}

const obj = [
  createData("Dato1"),
  createData("Dato2"),
  createData("Dato3"),
  createData("Dato4"),
  createData("Dato5"),
];

function App() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const handleOpen = (e) => {
    setText(e);

    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const [datos, setDatos] = useState([]);
  const updateDato = (dato) => {
    setDatos([...datos, dato]);
  };
  console.log(datos);
  return (
    <Container style={{ backgroundColor: "#7a7a7a", minHeight: "100vh" }}>
      <Box>
        <h1
          style={{
            textAlign: "center",
            fontSize: "50px",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontFamily: "'Roboto', sans-serif",
          }}
        >
          Gerson y PedroIglesia
        </h1>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Activos</StyledTableCell>
                {/* <StyledTableCell align="right">Description</StyledTableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {obj.map((e) => (
                <StyledTableRow
                  key={e.name}
                  // onClick={() => updateDato(e.name)}
                  onClick={() => handleOpen(e.name)}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <StyledTableCell component="th" scope="row">
                    {e.name}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {text}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </Box>
      <Button
        style={{ marginTop: "20px", width: "100%" }}
        color="error"
        variant="contained"
        startIcon={<DeleteIcon />}
        onClick={() => setDatos([])}
      >
        Clear ALL
      </Button>
    </Container>
  );
}

export default App;
