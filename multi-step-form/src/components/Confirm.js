import React from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { List, ListItem, ListItemText, Toolbar, Typography, Box } from '@mui/material';
import Button from '@mui/material/Button';

// Create a theme if needed
const theme = createTheme();

const Confirm = ({ values, nextStep, prevStep }) => {
  const continueHandler = (e) => {
    e.preventDefault();
    // PROCESS FORM //
    nextStep();
  };

  const backHandler = (e) => {
    e.preventDefault();
    prevStep();
  };

  const { firstName, lastName, email, occupation, city, bio } = values;

  return (
    <ThemeProvider theme={theme}>
      <Dialog open fullWidth maxWidth="sm">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div">
              Confirm User Data
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem>
            <ListItemText primary="First Name" secondary={firstName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Last Name" secondary={lastName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Email" secondary={email} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Occupation" secondary={occupation} />
          </ListItem>
          <ListItem>
            <ListItemText primary="City" secondary={city} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Bio" secondary={bio} />
          </ListItem>
        </List>
        <Box display="flex" justifyContent="space-between" m={2}>
          <Button color="secondary" variant="contained" onClick={backHandler}>
            Back
          </Button>
          <Button color="primary" variant="contained" onClick={continueHandler}>
            Confirm & Continue
          </Button>
        </Box>
      </Dialog>
    </ThemeProvider>
  );
};

export default Confirm;
