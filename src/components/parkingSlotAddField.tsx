import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import { Grid, Paper, TextField, Button } from '@material-ui/core';
import { addParkingSlot } from '../functions';
import { parkingslot } from '../interfaces';

function ParkingSlotAddField() {
  const [licenseplate, setLicenseplate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{padding: "1rem"}}
    >
      <Grid item xs={11}>
        <Paper >
          <TextField
            label="Nummerplaat"
            variant="outlined"
            style={{margin: "1rem", width: "20rem"}}
            value={licenseplate}
            onChange={(event) => { setLicenseplate(event.target.value) }}
          />
          <TextField
            id="startTime"
            label="Start tijd parkeren"
            type="datetime-local"
            style={{margin: "1rem"}}
            value={startTime}
            onChange={(event) => { setStartTime(event.target.value) }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="endTime"
            label="Eind tijd parkeren"
            type="datetime-local"
            style={{margin: "1rem"}}
            value={endTime}
            onChange={(event) => { setEndTime(event.target.value) }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button variant="contained" color="primary" style={{margin:"1rem", float: "right"}} onClick={() => {
            let parkingSlot: parkingslot = {
              startTime: new Date(startTime).getTime(),
              endTime: new Date(endTime).getTime(),
              licensePlate: licenseplate,
              id: Math.round(Math.random() * 100000)
            };
            addParkingSlot(parkingSlot);
          }}>parkeren</Button>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default ParkingSlotAddField;