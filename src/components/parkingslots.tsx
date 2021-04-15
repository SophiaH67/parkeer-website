import { Grid } from '@material-ui/core';
import React from 'react';
import Parkingslot from './parkingslot';
import { getParkingSlots } from '../functions';

function Parkingslots() {
  let parkingSlots = getParkingSlots();
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      style={{ width: "100%" }}
    >
      {parkingSlots.map( (parkingSlot, i) => <Parkingslot key={parkingSlot.id} id={parkingSlot.id} startTime={parkingSlot.startTime} endTime={parkingSlot.endTime} licensePlate={parkingSlot.licensePlate} />)}
    </Grid>
  );
}

export default Parkingslots;