import { Button, Grid, LinearProgress, Paper, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { parkingslot } from '../interfaces';
import dayjs from 'dayjs';
import 'dayjs/locale/nl';
/// <reference types="@dayjs/relative-time" />
import relativeTime from 'dayjs/plugin/relativeTime';
/// <reference types="@dayjs/duration" />
import duration from 'dayjs/plugin/duration';
dayjs.extend(relativeTime);
dayjs.extend(duration);

dayjs.locale('nl')

function Parkingslot(props: parkingslot) {
  const [progress, setProgress] = useState(100);
  const [durationLeft, setDurationLeft] = useState("loading...");
  const startTime = dayjs(props.startTime);
  const endTime = dayjs(props.endTime);

  const updateProgress = () => {
    setProgress(
      Math.min(Math.max(
        ((new Date().getTime() - props.startTime) / (props.endTime - props.startTime)) * 100
        , 0), 100)
    );
    setDurationLeft(
      dayjs.duration(endTime.valueOf() - new Date().getTime()).humanize()
    )
    
  }
  useEffect(() => {
    setInterval(updateProgress, 1000);
    updateProgress();
  }, []);

  return (
    <Paper style={{ padding: "1rem" }}>
      <Typography variant="h5">
        U bent nog geparkeert voor {durationLeft}
      </Typography>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="center"
        style={{ width: "100%" }}
      >
        <Grid item xs={6}>
          <Typography variant="subtitle1">{startTime.format("dddd DD HH:mm")}-{endTime.format("HH:mm")}</Typography>
          <Typography variant="subtitle2">{props.licensePlate}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" color="secondary" style={{ float: "right", margin: "1rem" }}>
            annuleer
          </Button>
        </Grid>
      </Grid>
      <LinearProgress variant="determinate" value={((new Date().getTime() - props.startTime) / (props.endTime - props.startTime)) * 100} />

    </Paper>
  );
}

export default Parkingslot;