import { Box, Button } from "@mui/material";
import PageWrapperWithTitle from "../PageWrapperWithTitle";
import { useFormik } from "formik";
import FieldsBuilder from "../FieldsBuilder";
import { AppDispatch, Field, RootState } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../../store/actions/user";

import { useNavigate, useParams } from "react-router-dom";
import EditContactSchema from "../../utils/forms/EditContactSchema";

type NewContact = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

const ContactEditForm = () => {
  const { users } = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch<AppDispatch>();
  const { contactId } = useParams();
  const navigate = useNavigate();

  const currentUser = users.find((user) => user.login.uuid === contactId);
  if (!currentUser) {
    navigate("/");
    return;
  }
  const { name, email, phone } = currentUser;
  const { first, last } = name;

  const userName = `${first}, ${last}`;

  const initialValues: NewContact = {
    firstName: first,
    lastName: last,
    email,
    phone,
  };

  const formik = useFormik({
    initialValues,
    validationSchema: EditContactSchema,
    onSubmit: (values) => {
      const newUser = {
        ...currentUser,
        ...values,
        name: { first: values.firstName, last: values.lastName },
      };

      dispatch(editUser(newUser as any));
      navigate("/");
    },
  });

  const fields: Field[] = [
    { label: "First Name", placeholder: "Enter First Name", name: "firstName" },
    { label: "Last Name", placeholder: "Enter Last Name", name: "lastName" },
    { label: "E-mail", placeholder: "Enter Email", name: "email" },
    { label: "Phone", placeholder: "Enter Phone", name: "phone" },
  ];
  return (
    <PageWrapperWithTitle title={`${userName} Profile`}>
      <form style={{ width: "50%" }} onSubmit={formik.handleSubmit}>
        <FieldsBuilder fields={fields} formikHelpers={formik} />
        <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
          <Button
            type="submit"
            variant="contained"
            sx={{
              color: "black",
              background: "#ffffff",
              border: "1px solid black",
              "&:hover": { background: "lightGrey" },
            }}
          >
            Save Contact
          </Button>
        </Box>
      </form>
    </PageWrapperWithTitle>
  );
};

export default ContactEditForm;
