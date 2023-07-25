import { Container, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const Preview = (props) => {
  const resume = useSelector((state) => state.resume);
  console.log(resume);

  const template = () => {
    const resTemp = {
      personalDetails: {
        firstName: "Jason",
        lastName: "Wat",
        email: "jasonwat@jason.co.in",
        address: "Arena Tower, Street Road, Mumbai",
        country: "Kar",
        state: "DC",
        zip: "230423",
      },
      eduDetails: [
        {
          eduType: "Secondary",
          institutionName: "Public High",
          startYear: "2010",
          endYear: "2010",
          scoreType: "Percentage",
          score: "100",
        },
        {
          eduType: "Senior Secondary",
          institutionName: "Public Junior College",
          startYear: "2010",
          endYear: "2012",
          scoreType: "Percentage",
          score: "95",
        },
        {
          eduType: "Under Graduation",
          institutionName: "Mumbai University",
          startYear: "2012",
          endYear: "2016",
          scoreType: "GPA",
          score: "9",
        },
      ],
      skills: {
        programming: ["c", "c++", "java"],
        framework: ["springboot"],
        nonTech: ["team work"],
      },
    };
  };

  return (
    <Container>
      <Typography variant="h1">PREVIEW PAGE</Typography>
      <Typography>{JSON.stringify(resume)}</Typography>
    </Container>
  );
};

export default Preview;
