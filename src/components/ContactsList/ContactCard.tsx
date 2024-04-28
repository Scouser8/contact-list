import { Card } from "@mui/material";
import { User } from "../../types";

type Props = {
  user: User;
};

const ContactCard = (props: Props) => {
  const { user } = props;
  return (
    <Card>
      <pre>{JSON.stringify(user)}</pre>
    </Card>
  );
};

export default ContactCard;
