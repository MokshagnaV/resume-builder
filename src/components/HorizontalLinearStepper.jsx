import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import PersonalDetails from "./personalDetails";
import MoreDetails from "./MoreDetails";
import EduDetails from "./EduDetails";
import Skills from "./Skills";
import { useNavigate } from "react-router";

const steps = [
  "Personal Details",
  "More Details",
  "Educational Details",
  "Skills",
];

const stepContent = {
  "Personal Details": (props) => <PersonalDetails handleNext={props} />,
  "More Details": (props) => <MoreDetails handleNext={props} />,
  "Educational Details": (props) => <EduDetails handleNext={props} />,
  Skills: (props) => <Skills handleNext={props} />,
};

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      navigate("/preview");
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={index} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <React.Fragment>
        <Box sx={{ mt: 2, mb: 1 }}>
          {stepContent[steps[activeStep]](handleNext)}
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Box sx={{ flex: "1 1 auto" }} />
          {/* <Button onClick={handleNext}>
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button> */}
        </Box>
      </React.Fragment>
    </Box>
  );
}
