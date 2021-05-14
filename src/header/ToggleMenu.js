import React from 'react';

import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';

function ToggleMenu({ toggle, on }) {
  return (
    <Button onClick={toggle}>
      {on ? (
        <CloseIcon fontSize="large" style={{ color: '#f2f2f2' }} />
      ) : (
        <MenuIcon fontSize="large" style={{ color: '#f2f2f2' }} />
      )}
    </Button>
  );
}

export default ToggleMenu;
