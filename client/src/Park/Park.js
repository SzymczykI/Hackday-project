import React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const Park = ({name , id}) => {


    return (
        <List component="div" id={id} disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary={name} />
            </ListItemButton>
        </List>
    )
}

export default Park;