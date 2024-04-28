import { Box, Card, Typography } from "@mui/material";
import { User } from "../../types";
import contactCardStyles from "../../styles/contactCard.styles";

type Props = {
  user: User;
};

const ContactCard = (props: Props) => {
  const { user } = props;
  const {
    picture,
    name: { first, last },
    email,
    phone,
  } = user;

  const userName = `${last}, ${first}`;
  return (
    <Card sx={contactCardStyles}>
      <img src={picture.medium} alt="user-image" />
      <Box className="userDetails">
        <Typography className="userName">{userName}</Typography>
        <Typography className="userInfo">{email}</Typography>
        <Typography className="userInfo">{phone}</Typography>
      </Box>
    </Card>
  );
};

export default ContactCard;
