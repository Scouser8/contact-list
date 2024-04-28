import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import PageWrapperWithTitle from "../PageWrapperWithTitle";

const NewContactForm = () => {
  return (
    <PageWrapperWithTitle>
      <Typography variant="h5">Add New Contanct</Typography>
      <form style={{ width: "100%" }}>
        <InputLabel size="normal">First Name</InputLabel>
        <TextField
          size="small"
          margin="dense"
          placeholder="Enter First Name"
          fullWidth
        />
        <InputLabel>Last Name</InputLabel>
        <TextField
          size="small"
          margin="dense"
          placeholder="Enter Last Name"
          fullWidth
        />
        <InputLabel>E-mail</InputLabel>
        <TextField
          size="small"
          margin="dense"
          placeholder="Enter Email"
          fullWidth
        />
        <InputLabel>Phone</InputLabel>
        <TextField
          size="small"
          margin="dense"
          placeholder="Enter Phone"
          fullWidth
        />
        <InputLabel>Address</InputLabel>
        <TextField
          size="small"
          margin="dense"
          placeholder="Enter Address"
          fullWidth
        />
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Button
            variant="contained"
            sx={{
              color: "black",
              background: "#ffffff",
              border: "1px solid black",
              "&:hover": { background: "lightGrey" },
            }}
          >
            Add Contact
          </Button>
        </Box>
      </form>
    </PageWrapperWithTitle>
  );
};

export default NewContactForm;
