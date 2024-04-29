import { Box, Button } from "@mui/material";
import PageWrapperWithTitle from "../PageWrapperWithTitle";
import { useFormik } from "formik";
import newContactSchema from "../../utils/forms/NewContactSchema";
import FieldsBuilder from "../FieldsBuilder";
import { AppDispatch, Field } from "../../types";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/actions/user";

import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

type NewContact = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
};

const initialValues: NewContact = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
};

const NewContactForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues,
    validationSchema: newContactSchema,
    onSubmit: (values) => {
      const newId = uuidv4();
      const newUser = {
        ...values,
        name: { first: values.firstName, last: values.lastName },
        login: { uuid: newId },
      };

      dispatch(addUser(newUser as any));
      navigate("/");
    },
  });

  const fields: Field[] = [
    { label: "First Name", placeholder: "Enter First Name", name: "firstName" },
    { label: "Last Name", placeholder: "Enter Last Name", name: "lastName" },
    { label: "E-mail", placeholder: "Enter Email", name: "email" },
    { label: "Phone", placeholder: "Enter Phone", name: "phone" },
    { label: "Address", placeholder: "Enter Address", name: "address" },
  ];
  return (
    <PageWrapperWithTitle title="Add New Contact">
      <form style={{ width: "100%" }} onSubmit={formik.handleSubmit}>
        <FieldsBuilder fields={fields} formikHelpers={formik} />
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
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
            Add Contact
          </Button>
        </Box>
      </form>
    </PageWrapperWithTitle>
  );
};

export default NewContactForm;
