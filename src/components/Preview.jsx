import {
  AccountBox,
  Download,
  Email,
  GitHub,
  LinkedIn,
  Phone,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
  Link,
  Button,
  Tooltip,
} from "@mui/material";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { useReactToPrint } from "react-to-print";

const Preview = (props) => {
  const resumeRef = useRef();
  const { personalDetails, eduDetails, skills, moreDetails } = useSelector(
    (state) => state.resume
  );

  const generatePdf = useReactToPrint({
    content: () => resumeRef.current,
    documentTitle: "Societies list",
    onAfterPrint: () => alert("PDF Download initiated"),
  });

  if (
    !(
      Object.keys(personalDetails).length &&
      Object.keys(eduDetails).length &&
      Object.keys(skills).length &&
      Object.keys(moreDetails).length
    )
  ) {
    return (
      <Container>
        <Typography> Enter Full details</Typography>
        <Link href="/">Home</Link>
      </Container>
    );
  }
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 4,
      }}
    >
      <Box className="resume" position="relative" ref={resumeRef}>
        <Container className="personalDetails">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Box>
              <Typography variant="h3">
                {personalDetails.firstName} {personalDetails.lastName}
              </Typography>
              <Typography>{personalDetails.address}</Typography>
              <Typography>
                {personalDetails.state}, {personalDetails.country}
              </Typography>
              <Typography>{personalDetails.zip}</Typography>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Phone fontSize="small" />
                <Link
                  href={`tel:${personalDetails.phone}`}
                  underline="hover"
                  color="#fff"
                >
                  {personalDetails.phone}
                </Link>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Email fontSize="small" />
                <Link
                  href={`mailto:${personalDetails.email}`}
                  underline="hover"
                  color="#fff"
                >
                  {personalDetails.email}
                </Link>
              </Stack>
            </Box>
            <Avatar
              sx={{ width: 128, height: 128 }}
              alt={`${personalDetails.firstName} ${personalDetails.lastName}`}
              src={moreDetails.photo}
            >{`${personalDetails.firstName[0]} ${personalDetails.lastName[0]}`}</Avatar>
          </Stack>
        </Container>
        <Container sx={{ padding: 2 }}>
          <Typography variant="h4" gutterBottom>
            Summary
          </Typography>
          <Typography variant="body">{moreDetails.summary}</Typography>
        </Container>
        <Divider />
        <Container sx={{ padding: 2 }}>
          <Typography variant="h4" gutterBottom>
            Educational Details
          </Typography>
          <Grid container spacing={3}>
            {eduDetails.map((edu, index) => (
              <Grid item xs={6} key={index}>
                <Typography variant="h5">{edu.eduType}</Typography>
                <Typography variant="body2">{edu.institutionName}</Typography>
                <Typography variant="body2">
                  {edu.startYear === edu.endYear
                    ? edu.startYear
                    : edu.startYear + " - " + edu.endYear}
                </Typography>
                <Typography variant="body2">
                  {edu.scoreType} : {edu.score}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Divider />
        <Container sx={{ padding: 2 }}>
          <Typography variant="h4" gutterBottom>
            Skills
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="h5" gutterBottom>
                Technical Skills
              </Typography>
              <Stack spacing={1}>
                {skills.programming && (
                  <Stack direction="row" spacing={1}>
                    <Typography sx={{ fontWeight: "500" }}>
                      Programming:{" "}
                    </Typography>
                    <Typography>
                      {skills.programming.map((pro, index) => {
                        return skills.programming.length - 1 !== index
                          ? pro.charAt(0).toUpperCase() + pro.slice(1) + ", "
                          : pro.charAt(0).toUpperCase() + pro.slice(1);
                      })}
                    </Typography>
                  </Stack>
                )}
                {skills.framework && (
                  <Stack direction="row" spacing={1}>
                    <Typography sx={{ fontWeight: "500" }}>
                      Framework:{" "}
                    </Typography>
                    <Typography>
                      {skills.framework.map((pro, index) => {
                        return skills.framework.length - 1 !== index
                          ? pro.charAt(0).toUpperCase() + pro.slice(1) + ", "
                          : pro.charAt(0).toUpperCase() + pro.slice(1);
                      })}
                    </Typography>
                  </Stack>
                )}
                {skills.tools && (
                  <Stack direction="row" spacing={1}>
                    <Typography sx={{ fontWeight: "500" }}>Tools: </Typography>
                    <Typography>
                      {skills.tools.map((pro, index) => {
                        return skills.tools.length - 1 !== index
                          ? pro.charAt(0).toUpperCase() + pro.slice(1) + ", "
                          : pro.charAt(0).toUpperCase() + pro.slice(1);
                      })}
                    </Typography>
                  </Stack>
                )}
              </Stack>
            </Grid>
            <Grid item xs={6}>
              {skills.nonTech && (
                <Box>
                  <Typography variant="h5" gutterBottom>
                    Non - Technical Skills
                  </Typography>
                  <Stack direction="column" spacing={1}>
                    {skills.nonTech.map((pro, index) => {
                      return (
                        <Typography key={index}>
                          {pro.charAt(0).toUpperCase() + pro.slice(1)}
                        </Typography>
                      );
                    })}
                  </Stack>
                </Box>
              )}
            </Grid>
          </Grid>
        </Container>
        <Container sx={{ padding: 2, position: "absolute", bottom: 10 }}>
          <Stack direction="row" spacing={5} justifyContent="center">
            {moreDetails.linkedIn && (
              <Stack direction="row" alignItems="center" spacing={1}>
                <LinkedIn fontSize="small" />
                <Link href={moreDetails.linkedIn} underline="hover">
                  {moreDetails.linkedIn}
                </Link>
              </Stack>
            )}
            {moreDetails.github && (
              <Stack direction="row" alignItems="center" spacing={1}>
                <GitHub fontSize="small" />
                <Link href={moreDetails.github} underline="hover">
                  {moreDetails.github}
                </Link>
              </Stack>
            )}
            {moreDetails.portfolio && (
              <Stack direction="row" alignItems="center" spacing={1}>
                <AccountBox fontSize="small" />
                <Link href={moreDetails.portfolio} underline="hover">
                  {moreDetails.portfolio}
                </Link>
              </Stack>
            )}
          </Stack>
        </Container>
      </Box>
      <Stack margin={5} alignItems="center">
        <Tooltip title="Download as PDF" placement="bottom">
          <Button
            variant="contained"
            size="large"
            onClick={generatePdf}
            startIcon={<Download />}
          >
            Download
          </Button>
        </Tooltip>
      </Stack>
    </Container>
  );
};

export default Preview;
