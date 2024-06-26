import { object, string } from "yup";

const NewContactSchema = object({
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

export default NewContactSchema;
