import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link } from 'react-router-dom';

const buttons = [
  <Button key="one"><Link className="main-page-link" to="/">OverView</Link> </Button>,
  <Button key="two"><Link className="main-page-link" to="/history">History</Link> </Button>,
];
export function Tabs() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup size="large" aria-label="large button group">
        {buttons}
      </ButtonGroup>
    </Box>
  );
}
