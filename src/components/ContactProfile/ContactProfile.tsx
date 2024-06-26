import { Box, Button } from "@mui/material";
import { AppDispatch, RootState } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import PageWrapperWithTitle from "../PageWrapperWithTitle";
import contactCardStyles from "../../styles/contactCard.styles";
import ConfirmationDialog from "../ConfirmationDialog";
import { useState } from "react";
import { deleteUser } from "../../store/actions/user";

const DELETE_CONFIRMATION_MESSAGE =
  "Are you sure you want to delete this contact?";

const ContactProfile = () => {
  const { contactId } = useParams();
  const [isDeleteConfirmationDialogOpen, setIsDeleteConfirmationDialogOpen] =
    useState(false);
  const { users } = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();

  const currentUser = users.find((user) => user.login.uuid === contactId);
  if (!contactId || !currentUser) {
    navigate("/");
    return;
  }
  const { picture, name, email, phone, address, location } = currentUser || {};
  const { first, last } = name || {};

  const contactAddress = location
    ? `${location.street.name} ${location.street.number}, ${location.city}, ${location.state}`
    : address;
  const userName = `${first}, ${last}`;

  const handleOpenDeleteDialog = () => setIsDeleteConfirmationDialogOpen(true);

  const handleCloseDeleteDialog = () =>
    setIsDeleteConfirmationDialogOpen(false);

  const handleDeleteContact = () => {
    dispatch(deleteUser(contactId));
    handleCloseDeleteDialog();
    navigate("/");
  };

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
        <Button
          color="error"
          variant="outlined"
          size="small"
          onClick={handleOpenDeleteDialog}
        >
          Delete
        </Button>
        <Link to={`/contact/${contactId}/edit`}>
          <Button color="info" variant="outlined" size="small">
            Edit
          </Button>
        </Link>
      </Box>
      <ConfirmationDialog
        isDialogOpen={isDeleteConfirmationDialogOpen}
        confirmationMessage={DELETE_CONFIRMATION_MESSAGE}
        handleDialogClose={handleCloseDeleteDialog}
        handleSubmit={handleDeleteContact}
      />
    </PageWrapperWithTitle>
  );
};

export default ContactProfile;
