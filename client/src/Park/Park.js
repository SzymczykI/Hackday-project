import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const Park = ({name , id, fetchData}) => {


    const onClickHandler = async (e) => {
        e.preventDefault();
        const result = await fetchData(id);
        console.log(result)
        return result
    }

    return (
        <List component="div" id={id} disablePadding>
            <ListItemButton onClick={onClickHandler} sx={{ pl: 4 }}>
                <ListItemText primary={name} />
            </ListItemButton>
        </List>
    )
}

export default Park;