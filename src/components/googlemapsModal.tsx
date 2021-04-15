import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import React from 'react';

interface props {
  onClose: () => void
  open: boolean
}

function GooglemapsModal(props: props) {
  return (
    <div>
      <Dialog open={props.open} onClose={props.onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Locatie</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Selecteer uw parkeerplek op de kaart
            </DialogContentText>
          <img style={{width: "100%", height: "100%"}} src="https://assets.marnixah.com/googlemaps.png" />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose} color="primary">
            stop
            </Button>
          <Button onClick={props.onClose} color="primary">
            oke
            </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default GooglemapsModal;