import { useRef } from "react";
import { formToObj } from "../services/formatter";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resumeActions } from "../store/resume";
import {
  Autocomplete,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { NavigateNext } from "@mui/icons-material";

const PersonalDetails = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formRef = useRef();
  const onNext = (e) => {
    e.preventDefault();
    const form = formRef.current;
    console.log(formToObj(form));
    dispatch(resumeActions.setPersonalDetails(formToObj(form)));
    navigate("/create/1");
  };

  // const [errors, setErrors] = useState({});

  const personalData = useSelector((state) => state.resume.setPersonalDetails);
  console.log(personalData);

  return (
    <form ref={formRef} onSubmit={onNext}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h2">
            Personal Details
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="firstName"
            name="firstName"
            label="First name"
            variant="outlined"
            fullWidth
            // helperText={errors.firstName}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="lastName"
            name="lastName"
            label="Last name"
            variant="outlined"
            fullWidth
            // helperText={errors.lastName}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="email"
            id="email"
            type="email"
            label="Email address"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="address"
            id="address"
            label="Address"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="address2"
            id="address2"
            label="Address 2 (Optional)"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Autocomplete
            options={["Kar", "MAl", "God"]}
            renderInput={(params) => (
              <TextField
                name="country"
                id="country"
                {...params}
                label={"Country"}
                required
              />
            )}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Autocomplete
            options={["DC", "WE", "Cal"]}
            renderInput={(params) => (
              <TextField
                id="state"
                name="state"
                {...params}
                label={"State"}
                required
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField name="zip" id="zip" label="Zip Code" required fullWidth />
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

export default PersonalDetails;
