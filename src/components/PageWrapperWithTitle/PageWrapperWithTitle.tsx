import { Container, Typography } from "@mui/material";

type Props = {
  title: string;
  children: React.ReactNode;
};

const PageWrapperWithTitle = (props: Props) => {
  const { title, children } = props;
  return (
    <Container
      sx={{
        width: "70%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
      }}
    >
      <Typography variant="h5">{title}</Typography>
      {children}
    </Container>
  );
};

export default PageWrapperWithTitle;
