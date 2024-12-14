import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

// Create a theme if needed
const theme = createTheme();

const styles = {
  button: {
    marginTop: "20px",
    marginRight: "10px",
  },
};

const FormPersonalDetails = ({ values, handleChange, nextStep, prevStep }) => {
  const continueHandler = (e) => {
    e.preventDefault();
    nextStep();
  };

  const backHandler = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div">
              Enter Personal Details
            </Typography>
          </Toolbar>
        </AppBar>
        <Box m={2}>
          <TextField
            label="Occupation"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={handleChange("occupation")}
            defaultValue={values.occupation}
          />
          <TextField
            label="City"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={handleChange("city")}
            defaultValue={values.city}
          />
          <TextField
            label="Bio"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={handleChange("bio")}
            defaultValue={values.bio}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={continueHandler}
            style={styles.button}
          >
            Continue
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={backHandler}
            style={styles.button}
          >
            Back
          </Button>
        </Box>
      </React.Fragment>
    </ThemeProvider>
  );
};

export default FormPersonalDetails;
