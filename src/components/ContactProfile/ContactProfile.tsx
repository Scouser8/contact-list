import { Box, Button } from "@mui/material";
import { RootState } from "../../types";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PageWrapperWithTitle from "../PageWrapperWithTitle";
import contactCardStyles from "../../styles/contactCard.styles";

const ContactProfile = () => {
  const { users } = useSelector((state: RootState) => state.users);
  const { contactId } = useParams();
  console.log("contactId", contactId);

  const currentUser = users.find((user) => user.login.uuid === contactId);
  const { picture, name, email, phone, address, location } = currentUser || {};
  const { first, last } = name || {};

  const contactAddress = location
    ? `${location.street.name} ${location.street.number}, ${location.city}, ${location.state}`
    : address;
  const userName = `${first}, ${last}`;

  return (
    <PageWrapperWithTitle title={`${userName} Profile`}>
      <Box sx={{ display: "flex", gap: 2, fontSize: 12, fontWeight: 500 }}>
        <img src={picture?.medium} alt="user-image" />
        <Box sx={contactCardStyles[".userDetails"]}>
          <Box sx={{ display: "flex" }}>
            <label>E-mail:&nbsp;</label>
            <span style={{ color: "red" }}>{email}</span>
          </Box>
          <Box sx={{ display: "flex" }}>
            <label>Phone:&nbsp;</label>
            <span>{phone}</span>
          </Box>
          <Box sx={{ display: "flex" }}>
            <label>Address:&nbsp;</label>
            <span>{contactAddress}</span>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Button color="error" variant="outlined" size="small">
          Delete
        </Button>
        <Button color="info" variant="outlined" size="small">
          Edit
        </Button>
      </Box>
    </PageWrapperWithTitle>
  );
};

export default ContactProfile;
