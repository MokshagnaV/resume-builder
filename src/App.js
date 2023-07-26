import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateResume from "./components/CreateResume";
import Main from "./components/Main";
import Preview from "./components/Preview";
import { CssBaseline } from "@mui/material";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";

function App() {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" Component={Main} />
            <Route path="/create/*" element={<CreateResume />} />
            <Route path="/preview" element={<Preview />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
