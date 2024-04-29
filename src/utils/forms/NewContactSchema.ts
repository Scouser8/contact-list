import { object, string } from "yup";

const newContactSchema = object({
  firstName: string()
    .required()
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed"),
  lastName: string()
    .required()
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed"),
  email: string().email().required(),
  phone: string().required(),
  address: string().required(),
});

export default newContactSchema;
