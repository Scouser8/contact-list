import { Container, Typography } from "@mui/material";
import { RootState } from "../../types";
import { useSelector } from "react-redux";
import ContactCard from "./ContactCard";

const ContactsList = () => {
  const { users, error } = useSelector((state: RootState) => state.users);

  return (
    <Container>
      {error ? (
        <Typography>{error}</Typography>
      ) : (
        users.map((user) => <ContactCard user={user} />)
      )}
    </Container>
  );
};

export default ContactsList;
