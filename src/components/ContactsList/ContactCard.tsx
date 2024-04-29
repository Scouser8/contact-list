import { Box, Card, Typography } from "@mui/material";
import { Contact } from "../../types";
import contactCardStyles from "../../styles/contactCard.styles";
import { Link } from "react-router-dom";

type Props = {
  user: Contact;
};

const ContactCard = (props: Props) => {
  const { user } = props;
  const {
    picture,
    name: { first, last },
    email,
    phone,
    login: { uuid },
  } = user;

  const userName = `${last}, ${first}`;
  return (
    <Link to={`/contact/${uuid}`}>
      <Card sx={contactCardStyles}>
        <img src={picture?.medium} alt="user-image" />
        <Box className="userDetails">
          <Typography className="userName">{userName}</Typography>
          <Typography className="userInfo">{email}</Typography>
          <Typography className="userInfo">{phone}</Typography>
        </Box>
      </Card>
    </Link>
  );
};

export default ContactCard;
