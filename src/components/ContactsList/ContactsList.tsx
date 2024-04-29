import { Box, Container, Grid, Typography } from "@mui/material";
import { Contact, RootState } from "../../types";
import { useSelector } from "react-redux";
import ContactCard from "./ContactCard";
import PageWrapperWithTitle from "../PageWrapperWithTitle";
import { useMemo, useState } from "react";

const ContactsList = () => {
  const { users, error } = useSelector((state: RootState) => state.users);

  const [selectedLetter, setSelectedLetter] = useState("");

  const contactsGroupedByNameStartLetter = useMemo(() => {
    return users.reduce((list, contact) => {
      const firstLetter = contact.name.first[0];
      if (list[firstLetter]) {
        list[firstLetter].push(contact);
      } else {
        list[firstLetter] = [contact];
      }
      return list;
    }, {} as any);
  }, [users]);

  const contactsList = selectedLetter
    ? (contactsGroupedByNameStartLetter[selectedLetter] as Contact[])
    : users;

  const handleLetterSelection = (letter: string) => {
    setSelectedLetter(selectedLetter === letter ? "" : letter);
  };

  return (
    <PageWrapperWithTitle title="Contancts">
      {error ? (
        <Typography>{error}</Typography>
      ) : (
        <Box>
          <Container
            sx={{
              display: "flex",
              gap: 3,
              color: "#424242",
              justifyContent: "center",
              mb: 4,
            }}
          >
            {Object.keys(contactsGroupedByNameStartLetter as Object).map(
              (letter) => (
                <Typography
                  sx={{
                    fontWeight: "bold",
                    cursor: "pointer",
                    userSelect: "none",
                    color: letter === selectedLetter ? "lightgray" : "#424242",
                    "&:hover": { color: "lightgray" },
                  }}
                  onClick={() => handleLetterSelection(letter)}
                >
                  {letter}
                </Typography>
              )
            )}
          </Container>
          <Grid container sx={{ display: "flex" }} spacing={3}>
            {contactsList.map((user) => (
              <Grid
                item
                xs={12}
                md={6}
                lg={contactsList.length < 3 ? 6 : 4}
                key={user.login.uuid}
              >
                <ContactCard user={user} />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </PageWrapperWithTitle>
  );
};

export default ContactsList;
