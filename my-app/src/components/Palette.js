
import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import Button from '@material-ui/core/Button';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2196F3' }, // Purple and green play nicely together.
    secondary: { main: '#FFC107' }, // This is just green.A700 as hex.
  },
  typography: { useNextVariants: true },
});

function Palette() {
  return (
    <MuiThemeProvider theme={theme}>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
    </MuiThemeProvider>
  );
}

export default Palette;
