import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loader() {
  return (
    <Box sx={{ marginLeft:'50%', padding: '50px' }}>
      <CircularProgress />
    </Box>
  );
}