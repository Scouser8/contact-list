import { Box, InputLabel, TextField } from "@mui/material";
import { Field } from "../../types";

type Props = { fields: Field[]; formikHelpers: any };

const FieldsBuilder = (props: Props) => {
  const { fields, formikHelpers } = props;
  return fields.map(({ label, name, placeholder, id = undefined }) => (
    <Box key={id || name}>
      <InputLabel size="normal">{label}</InputLabel>
      <TextField
        fullWidth
        size="small"
        margin="dense"
        id={id}
        name={name}
        placeholder={placeholder}
        value={formikHelpers.values[name]}
        onChange={formikHelpers.handleChange}
        onBlur={formikHelpers.handleBlur}
        error={
          formikHelpers.touched[name] && Boolean(formikHelpers.errors[name])
        }
        helperText={formikHelpers.touched[name] && formikHelpers.errors[name]}
      />
    </Box>
  ));
};

export default FieldsBuilder;
