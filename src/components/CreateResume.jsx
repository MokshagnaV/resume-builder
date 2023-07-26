import { Container, Paper, Typography } from "@mui/material";
import HorizontalLinearStepper from "./HorizontalLinearStepper";

const CreateResume = (props) => {
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
      <Paper
        variant="outlined"
        sx={{ m: { xs: 2, sm: 4 }, p: { xs: 2, sm: 4 } }}
      >
        <Typography variant="h3" component="h1" textAlign="center" gutterBottom>
          Create Your Resume Here!!
        </Typography>
        <HorizontalLinearStepper />
      </Paper>
    </Container>
  );
};

export default CreateResume;
