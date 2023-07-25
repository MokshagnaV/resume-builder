import { Container, Paper, Typography } from "@mui/material";
import PersonalDetails from "./personalDetails";
import { Route, Routes } from "react-router-dom";
import EduDetails from "./EduDetails";
import Skills from "./Skills";

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
      <Typography variant="h3" component="h1">
        Create Your Resume Here!!
      </Typography>
      <Paper
        variant="outlined"
        sx={{ m: { xs: 2, sm: 4 }, p: { xs: 2, sm: 4 } }}
      >
        <Routes>
          <Route path="/" element={<PersonalDetails />} />
          <Route path="/1" element={<EduDetails />} />
          <Route path="/2" element={<Skills />} />
        </Routes>
      </Paper>
    </Container>
  );
};

export default CreateResume;
