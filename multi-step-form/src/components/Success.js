import React from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// Create a theme if needed
const theme = createTheme();

const Success = ({ nextStep }) => {
  const continueHandler = (e) => {
    e.preventDefault();
    // PROCESS FORM //
    nextStep();
  };

  return (
    <ThemeProvider theme={theme}>
      <Dialog open fullWidth maxWidth="sm">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div">
              Success
            </Typography>
          </Toolbar>
        </AppBar>
        <Box textAlign="center" p={3}>
          <Typography variant="h4" gutterBottom>
            Thank You For Your Submission
          </Typography>
          <Typography variant="body1">
            You will get an email with further instructions.
          </Typography>
        </Box>
      </Dialog>
    </ThemeProvider>
  );
};

export default Success;
