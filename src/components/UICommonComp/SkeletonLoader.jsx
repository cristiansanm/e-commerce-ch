import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

function SkeletonLoader() {
  return (
    <div>
      <Stack spacing={1} sx={{margin: '0 auto', width: '100%'}}>
        
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={118} />
      </Stack>
    </div>
  )
}

export default SkeletonLoader
