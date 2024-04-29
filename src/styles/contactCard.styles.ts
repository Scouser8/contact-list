import { Theme } from "@mui/material";

const contactCardStyles = (theme: Theme) => ({
  px: 1,
  py: 1,
  display: "flex",
  width: 260,
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  gap: 1,
  cursor: "pointer",
  ".userDetails": { display: "flex", flexDirection: "column", gap: 1 },
  ".userNamer": { fontWeight: "bold" },
  ".userInfo": { fontSize: 11, color: "gray" },
});

export default contactCardStyles;
