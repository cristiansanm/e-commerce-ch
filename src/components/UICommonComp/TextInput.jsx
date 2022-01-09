import * as React from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';


export default function TextInput() {
  const [values, setValues] = React.useState({
    search: '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };


  return (
    <Box mt={2} fullWidth sx={{ display: 'flex', flexWrap: 'wrap', width: '100%',}}>
      <div style={{width: '100%',}}>
        <FormControl sx={{ width: '95%'}} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            value={values.search}
            onChange={handleChange('search')}
            endAdornment={
                <InputAdornment position="end">
                   <SearchIcon/>
                </InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'buscar',
            }}
          />
          <FormHelperText id="outlined-weight-helper-text">Buscar</FormHelperText>
        </FormControl>
      </div>
    </Box>
  );
}