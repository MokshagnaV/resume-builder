import { useRef } from "react";
import { formToObj } from "../services/formatter";
import { useDispatch } from "react-redux";
import { resumeActions } from "../store/resume";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { NavigateNext } from "@mui/icons-material";

const PersonalDetails = (props) => {
  const dispatch = useDispatch();
  const formRef = useRef();
  const onNext = (e) => {
    e.preventDefault();
    const form = formRef.current;
    dispatch(resumeActions.setPersonalDetails(formToObj(form)));

    props.handleNext();
  };

  function onlyNumberKey(evt) {
    var ASCIICode = evt.which ? evt.which : evt.keyCode;
    if (
      ASCIICode > 31 &&
      (ASCIICode < 48 || ASCIICode > 57) &&
      evt.target.value.length >= 10
    ) {
      evt.preventDefault();
      return false;
    }
    return true;
  }
  console.log(props);

  // const [errors, setErrors] = useState({});

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
            name="phone"
            id="phone"
            label="Phone No."
            onKeyDown={onlyNumberKey}
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
        <Grid item xs={12} sm={6}>
          <TextField
            name="country"
            id="country"
            label="Country"
            fullWidth
            required
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State" fullWidth required />
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
            Next
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default PersonalDetails;
