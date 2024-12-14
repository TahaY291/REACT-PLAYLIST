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
  },
};

const FormUserDetails = ({ values, handleChange, nextStep }) => {
  const continueHandler = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div">
              Enter User Details
            </Typography>
          </Toolbar>
        </AppBar>
        <Box m={2}>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={handleChange("firstName")}
            defaultValue={values.firstName}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={handleChange("lastName")}
            defaultValue={values.lastName}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={handleChange("email")}
            defaultValue={values.email}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={continueHandler}
            style={styles.button}
          >
            Continue
          </Button>
        </Box>
      </React.Fragment>
    </ThemeProvider>
  );
};

export default FormUserDetails;
