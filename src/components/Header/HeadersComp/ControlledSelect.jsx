import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import EuroIcon from '@mui/icons-material/Euro';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
export default function ControlledSelect() {
  const [age, setAge] = React.useState('euro');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1}}>
      <InputLabel id="demo-controlled-open-select-label">Moneda</InputLabel>
      <Select
        id="demo-controlled-open-select"
        value={age}
        label="Moneda"
        onChange={handleChange}
        sx={{height:40, width:120, paddingTop: '5px', paddingLeft: '25%'}}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"euro"}><EuroIcon fontSize="small"/></MenuItem>
        <MenuItem value={"dolar"}><AttachMoneyIcon fontSize="small"/></MenuItem>
      </Select>
    </FormControl>
  );
}
