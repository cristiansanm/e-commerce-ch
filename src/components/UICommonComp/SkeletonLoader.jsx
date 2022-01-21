import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

function SkeletonLoader() {
  return (
    <div>
      <Stack spacing={1} sx={{marginRight: '10px', width: '100%', maxWidth: 345}}>
        
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={345} height={118} />
      </Stack>
    </div>
  )
}

export default SkeletonLoader
