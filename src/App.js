import "./style/App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateResume from "./components/createResume";
import Main from "./components/Main";
import EduDetails from "./components/eduDetails";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" Component={Main} />
          <Route path="/create" element={<CreateResume />} />
          <Route path="/create/1" element={<EduDetails />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
