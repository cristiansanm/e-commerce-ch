import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { NavLink } from 'react-router-dom';
import { activeStyle } from './../../assets/js/styleObjects'

export default function ControlledSelectNB({header, listCategory, formatLink}) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <List
      sx={
          { 
              width: "10%", 
              maxWidth: 360,
              minWidth: 200, 
              background: 'linear-gradient(to bottom, #0943AEFF, #374e81);',
              '& a': { 
                  textDecoration: 'none',
                  color: 'white'
              },
              '& span':{
                fontFamily: 'Rubik,sans-serif',
                fontWeight: '600',
              }
            }}
      component="nav"
    >
      
      <ListItemButton className="button__hover" onClick={handleClick}>
        <ListItemIcon>
          <AddCircleIcon sx={{color: "white"}}/>
        </ListItemIcon>
        <ListItemText primary={header} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {(listCategory).map((element, key) => 
            <NavLink 
              key={key} 
              to={formatLink[element]}
              style= {({ isActive }) => 
                isActive ? activeStyle : undefined }>
                <List component="div" disablePadding>
                    <ListItemButton onClick={handleClick}key={key} className="button__hover" sx={{ pl: 4, }}>
                        <ListItemIcon>
                        <MusicNoteIcon sx={{color: "white"}}/>
                        </ListItemIcon>
                        <ListItemText primary={element}/>
                    </ListItemButton>
                </List>
            </NavLink>
        )}
        
        
      </Collapse>
    </List>
  );
}


