import { Box, Button, Grid, LinearProgress, Paper, Typography } from '@material-ui/core';
import React from 'react';

function Parkingslot() {
  return (
    <Paper style={{ padding: "1rem" }}>
      <Typography variant="h5">
        U bent nog geparkeert voor XX minuten
      </Typography>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="center"
        style={{ width: "100%" }}
      >
        <Grid item xs={6}>
          <Typography variant="subtitle1">Some time - some time</Typography>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" color="secondary" style={{float: "right", margin: "1rem"}}>
            annuleer
          </Button>
        </Grid>
      </Grid>
      <LinearProgress />
    </Paper>
  );
}

export default Parkingslot;