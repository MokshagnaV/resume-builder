import { useRef } from "react";
import { formToObj } from "../services/formatter";
import { useDispatch } from "react-redux";
import { resumeActions } from "../store/resume";
import {
  AccountBox,
  GitHub,
  LinkedIn,
  NavigateNext,
} from "@mui/icons-material";
import {
  Avatar,
  Button,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const MoreDetails = (props) => {
  const [imgSrc, setImgSrc] = useState("");
  const dispatch = useDispatch();
  const formRef = useRef();
  const onNext = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const formData = formToObj(form);
    if (formData.photo) {
      formData.photo = imgSrc;
    }
    dispatch(resumeActions.setMoreDetails(formData));
    props.handleNext();
  };

  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImgSrc(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <form ref={formRef} onSubmit={onNext}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h2">
            More Details
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Stack>
            <Typography variant="h5" component="p">
              Photo
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-around"
              alignItems="center"
            >
              <TextField
                type="file"
                name="photo"
                id="photo"
                inputProps={{ accept: "image/*" }}
                onChange={handleChange}
              />
              <Avatar src={imgSrc} sx={{ width: 128, height: 128 }} />
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="summary"
            name="summary"
            label="Summary"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5"> Additional Links</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="linkedIn"
            InputProps={{ startAdornment: <LinkedIn /> }}
            name="linkedIn"
            label="LinkedIn"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="github"
            InputProps={{ startAdornment: <GitHub /> }}
            name="github"
            label="Github"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="portfolio"
            name="portfolio"
            label="Portfolio"
            InputProps={{ startAdornment: <AccountBox /> }}
            fullWidth
          />
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

export default MoreDetails;
