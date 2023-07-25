import { useRef } from "react";
import { formToObj, parseEduDetails } from "../services/formatter";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resumeActions } from "../store/resume";
import { Delete, NavigateNext } from "@mui/icons-material";
import {
  Autocomplete,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const eduBox = (id) => {
  return (
    <Paper variant="outlined" sx={{ p: { xs: 2, sm: 4 } }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5">Educational Details - {id}</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id={`eduType${id}`}
            name={`eduType${id}`}
            label="Education Type"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id={`institutionName${id}`}
            name={`institutionName${id}`}
            label="Institution Name"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id={`startYear${id}`}
            name={`startYear${id}`}
            label="Start year"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id={`endYear${id}`}
            name={`endYear${id}`}
            label="End year"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Autocomplete
            options={["Percentage", "CGPA", "GPA"]}
            renderInput={(params) => (
              <TextField
                {...params}
                id={`scoreType${id}`}
                name={`scoreType${id}`}
                label="Score Type"
                required
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id={`score${id}`}
            name={`score${id}`}
            label="Score"
            type="number"
            fullWidth
            required
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

const EduDetails = (props) => {
  const [eduCount, setEduCount] = useState(1);
  const [eduBoxList, setEduBoxList] = useState([1]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formRef = useRef();
  const onNext = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const eduFormData = parseEduDetails(formToObj(form));
    dispatch(resumeActions.setEduDetails(eduFormData));
    navigate("/create/2");
  };

  // const [errors, setErrors] = useState({});

  const personalData = useSelector((state) => state.resume.eduDetails);
  console.log(personalData);
  const addEduBox = () => {
    setEduCount(eduCount + 1);
    setEduBoxList([...eduBoxList, eduCount + 1]);
  };

  const removeBox = () => {
    if (eduCount === 1) {
      return;
    }
    setEduBoxList(eduBoxList.slice(0, eduCount - 1));
    setEduCount(eduCount - 1);
  };

  return (
    <form ref={formRef} onSubmit={onNext}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h2">
            Educational Details
          </Typography>
        </Grid>
        <Grid item container xs={12} spacing={3}>
          {eduBoxList.map((ed) => (
            <Grid item xs={12} key={ed}>
              {eduBox(ed)}
            </Grid>
          ))}
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" onClick={addEduBox} fullWidth>
            Add Education details
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="outlined"
            onClick={removeBox}
            startIcon={<Delete />}
            fullWidth
          >
            Remove
          </Button>
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            type="submit"
            variant="contained"
            size="large"
            endIcon={<NavigateNext />}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
export default EduDetails;
