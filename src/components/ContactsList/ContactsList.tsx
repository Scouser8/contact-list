import { Grid, Typography } from "@mui/material";
import { RootState } from "../../types";
import { useSelector } from "react-redux";
import ContactCard from "./ContactCard";
import PageWrapperWithTitle from "../PageWrapperWithTitle";

const ContactsList = () => {
  const { users, error } = useSelector((state: RootState) => state.users);

  return (
    <PageWrapperWithTitle title="Contancts">
      {error ? (
        <Typography>{error}</Typography>
      ) : (
        <Grid container sx={{ display: "flex" }} spacing={3}>
          {users.map((user) => (
            <Grid item xs={12} md={6} lg={4} key={user.login.uuid}>
              <ContactCard user={user} />
            </Grid>
          ))}
        </Grid>
      )}
    </PageWrapperWithTitle>
  );
};

export default ContactsList;
