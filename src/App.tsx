import React from 'react';
import Parkingslots from './components/parkingslots';
import ParkingSlotAddField from './components/parkingSlotAddField';
import { createMuiTheme, CssBaseline, ThemeProvider, useMediaQuery } from '@material-ui/core';
function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(() =>
    createMuiTheme({
      palette: {
        type: prefersDarkMode ? 'dark' : 'light',
      }
    }), [prefersDarkMode]);

  return (
  <ThemeProvider theme={theme}>
    <CssBaseline>
      <ParkingSlotAddField />
      <Parkingslots />
    </CssBaseline>
  </ThemeProvider>
  );
}

export default App;
