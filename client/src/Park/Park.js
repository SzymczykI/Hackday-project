import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const Park = ({name , id, fetchData, display}) => {

 
    const onClickHandler = async (id) => {
        const result = await fetchData(id);
        const parkId = result.id;
        const name = result.name;
        const descr = result.description;
        const direct = result.directions;
        const lon = result.lon;
        const lan = result.lan;
        const link = result.link;
        const photo = result.gallery[0]
        const gallery = result.gallery;

       display(parkId, name, descr, direct, lon, lan, link, photo, gallery)
    }

    return (
        <div onClick={() => onClickHandler(id)}>
        <List component="div" id={id} disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary={name} />
            </ListItemButton>
        </List>
        </div>
    )
}

export default Park;