import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import Parkingslot from './parkingslot';
import { getParkingSlots, setRefreshFunction } from '../functions';

function Parkingslots() {
  const [random, setRandom] = useState(0);
  setRefreshFunction(() => setRandom(Math.random()));
  let parkingSlots = getParkingSlots();
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      style={{ width: "100%" }}
    >
      {parkingSlots.map( (parkingSlot, i) => <Parkingslot key={parkingSlot.id} location={parkingSlot.location} id={parkingSlot.id} startTime={parkingSlot.startTime} endTime={parkingSlot.endTime} licensePlate={parkingSlot.licensePlate} />)}
    </Grid>
  );
}

export default Parkingslots;