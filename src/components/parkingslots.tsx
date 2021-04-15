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
      <Parkingslot startTime={new Date().getTime() - 1 * 60 * 1000} endTime={new Date().getTime() + 10 * 60 * 1000} licensePlate={"13-ab-13-ab"} id={2}/>
      {parkingSlots.map( (parkingSlot, i) => <Parkingslot key={parkingSlot.id} id={parkingSlot.id} startTime={parkingSlot.startTime} endTime={parkingSlot.endTime} licensePlate={parkingSlot.licensePlate} />)}
    </Grid>
  );
}

export default Parkingslots;