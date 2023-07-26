import { Add, Clear, NavigateNext } from "@mui/icons-material";
import {
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { resumeActions } from "../store/resume";
import { useNavigate } from "react-router-dom";

const Skills = (props) => {
  const programmingRef = useRef();
  const frameworkRef = useRef();
  const toolsRef = useRef();
  const nonTechRef = useRef();

  const [skillData, setSkillData] = useState({});

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const setData = (target) => {
    const value = target.value.trim().toLowerCase();
    const id = target.id;
    if (!value) return;
    const updatedSkillData = { ...skillData };
    const targetArr = updatedSkillData[id] ? updatedSkillData[id] : [];
    if (targetArr.indexOf(value) !== -1) return;
    updatedSkillData[id] = [...targetArr, value];
    setSkillData(updatedSkillData);
    target.value = "";
  };

  const handleRemove = (type, index) => {
    const updatedSkillData = { ...skillData };
    updatedSkillData[type].splice(index, 1);
    setSkillData(updatedSkillData);
  };

  const handleClick = (ref) => {
    setData(ref.current);
  };

  const keyHandle = (e) => {
    if (e.keyCode !== 13) return;
    setData(e.target);
  };

  const handleNext = () => {
    navigate("/preview");
    dispatch(resumeActions.setSkills(skillData));
    props.handleNext();
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" component="h2">
          Technical Skills
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item xs={12}>
        {skillData.programming && skillData.programming.length !== 0 && (
          <Container>
            <Typography variant="h6">Programming Languages</Typography>
            <Divider />
            <List>
              {skillData.programming.map((item, index) => (
                <ListItem
                  key={index}
                  secondaryAction={
                    <IconButton
                      onClick={() => handleRemove("programming", index)}
                    >
                      <Clear />
                    </IconButton>
                  }
                >
                  <ListItemText>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </Container>
        )}
        <TextField
          inputRef={programmingRef}
          id="programming"
          label="Programming Languages"
          helperText="Ex: C, Java, Python"
          size="small"
          onKeyDown={keyHandle}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => handleClick(programmingRef)}>
                <Add />
              </IconButton>
            ),
          }}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item xs={12}>
        {skillData.framework && skillData.framework.length !== 0 && (
          <Container>
            <Typography variant="h6">Frameworks</Typography>
            <Divider />
            <List>
              {skillData.framework.map((item, index) => (
                <ListItem
                  key={index}
                  secondaryAction={
                    <IconButton
                      onClick={() => handleRemove("framework", index)}
                    >
                      <Clear />
                    </IconButton>
                  }
                >
                  <ListItemText>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </Container>
        )}
        <TextField
          inputRef={frameworkRef}
          id="framework"
          label="Frameworks"
          helperText="Ex: Bootstrap, React"
          size="small"
          onKeyDown={keyHandle}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => handleClick(frameworkRef)}>
                <Add />
              </IconButton>
            ),
          }}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item xs={12}>
        {skillData.tools && skillData.tools.length !== 0 && (
          <Container>
            <Typography variant="h6">Tools</Typography>
            <Divider />
            <List>
              {skillData.tools.map((item, index) => (
                <ListItem
                  key={index}
                  secondaryAction={
                    <IconButton onClick={() => handleRemove("tools", index)}>
                      <Clear />
                    </IconButton>
                  }
                >
                  <ListItemText>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </Container>
        )}
        <TextField
          inputRef={toolsRef}
          id="tools"
          label="Tools"
          helperText="Ex: Webpack, Postman, VsCode"
          size="small"
          onKeyDown={keyHandle}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => handleClick(toolsRef)}>
                <Add />
              </IconButton>
            ),
          }}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" component="h2">
          Non-Technical Skills
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item xs={12}>
        {skillData.nonTech && skillData.nonTech.length !== 0 && (
          <Container>
            <Typography variant="h6">Non-Technical Skills</Typography>
            <Divider />
            <List>
              {skillData.nonTech.map((item, index) => (
                <ListItem
                  key={index}
                  secondaryAction={
                    <IconButton onClick={() => handleRemove("nonTech", index)}>
                      <Clear />
                    </IconButton>
                  }
                >
                  <ListItemText>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </Container>
        )}
        <TextField
          inputRef={nonTechRef}
          id="nonTech"
          label="Non-Technical Skills"
          helperText="Ex: Team work, Good Communication"
          size="small"
          onKeyDown={keyHandle}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => handleClick(nonTechRef)}>
                <Add />
              </IconButton>
            ),
          }}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={handleNext}
          variant="contained"
          size="large"
          endIcon={<NavigateNext />}
        >
          Next
        </Button>
      </Grid>
    </Grid>
  );
};

export default Skills;
