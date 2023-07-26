import { Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/create");
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        Resume Builder
      </Typography>
      <Typography paragraph textAlign="center">
        Build your resume with less efforts. Don't worry about the design. Just
        give us the details, we'll take care of the rest!
      </Typography>
      <Button variant="contained" onClick={handleClick}>
        Let's get Started!
      </Button>
    </Container>
  );
};

export default Main;
