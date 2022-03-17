import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import dataForList from '../db.json';
import Park from '../Park/Park';

const ParkList = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = (e) => {
    e.preventDefault()
    setOpen(!open);
  };
  
  const parks = dataForList.parks.map((item, index) => <Park key={index} name={item.name} id={item.id} />)


  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="National Parks" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
       {parks}
      </Collapse>
    </List>
  );
};

export default ParkList
