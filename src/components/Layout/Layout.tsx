import { Box, IconButton } from "@mui/material";

import Header from "./Header";
import Footer from "./Footer";
import { Add } from "@mui/icons-material";
import { Link } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

export default function Layout(props: Props) {
  const { children } = props;

  return (
    <>
      <Header />
      <Box component="main" style={{ height: "90vh" }}>
        {children}
      </Box>
      <Link to="/contact/new">
        <IconButton
          aria-label="add"
          size="large"
          sx={{
            position: "fixed",
            bottom: 50,
            right: 12,
            color: "#ffffff",
            background: "red",
            "&:hover": {
              background: "tomato",
            },
          }}
        >
          <Add />
        </IconButton>
      </Link>
      <Footer />
    </>
  );
}
