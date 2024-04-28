import { Autocomplete, Box, TextField } from "@mui/material";
import headerStyles from "../../styles/header.styles";
import logo from "/vodafone_logo.svg";
function Header() {
  return (
    <Box sx={headerStyles}>
      <img
        src={logo}
        className="App-logo"
        alt="logo"
        style={{ maxHeight: 60, objectFit: "contain" }}
      />
      <Autocomplete
        sx={{ width: 300 }}
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={[]}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search for contact"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
      />
    </Box>
  );
}

export default Header;
