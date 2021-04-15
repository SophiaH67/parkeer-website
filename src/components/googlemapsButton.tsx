import React from 'react';
import GooglemapsModal from './googlemapsModal';
import { Icon, IconButton } from '@material-ui/core';
import MapIcon from '@material-ui/icons/Map';

function GooglemapsButton() {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <GooglemapsModal open={open} onClose={() => setOpen(false)} />
      <IconButton onClick={() => setOpen(true)}>
        <MapIcon />
      </IconButton>
    </div>
  );
}

export default GooglemapsButton;