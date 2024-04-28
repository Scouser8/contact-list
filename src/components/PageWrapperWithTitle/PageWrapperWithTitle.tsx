import { Container } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

const PageWrapperWithTitle = (props: Props) => {
  const { children } = props;
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
      {children}
    </Container>
  );
};

export default PageWrapperWithTitle;
