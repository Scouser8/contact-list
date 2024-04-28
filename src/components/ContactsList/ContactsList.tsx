import { Container, Grid, Typography } from "@mui/material";
import { RootState } from "../../types";
import { useSelector } from "react-redux";
import ContactCard from "./ContactCard";

const ContactsList = () => {
  const { users, error } = useSelector((state: RootState) => state.users);

  return (
    <Container
      sx={{
        width: "70%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
      }}
    >
      <Typography variant="h5">Contancts</Typography>
      {error ? (
        <Typography>{error}</Typography>
      ) : (
        <Grid container sx={{ display: "flex" }} spacing={3}>
          {users.map((user) => (
            <Grid item xs={12} md={6} lg={4}>
              <ContactCard user={user} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default ContactsList;
