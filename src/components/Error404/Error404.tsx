import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ArrowBackIos } from "@mui/icons-material";

function Error404() {
  const navigate = useNavigate();
  const handleNavigateToHome = () => navigate("/");
  return (
    <Box sx={{ px: 4, py: 6, minHeight: "100vh" }}>
      <Button
        sx={{ mb: 2 }}
        color="error"
        variant="outlined"
        startIcon={<ArrowBackIos />}
        onClick={handleNavigateToHome}
      >
        Go To Home
      </Button>
      <Typography variant="h3">Error 404 Page Not found.</Typography>
    </Box>
  );
}

export default Error404;
