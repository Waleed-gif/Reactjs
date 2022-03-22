import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React, {useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const DrawerComp = () => {
    const [open, setOpen] = useState(false);
    return ( 
        <React.Fragment>
            <Drawer open={open} onClose={() => setOpen(false)}>
                <List>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemText>Login</ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                </List>
            </Drawer>

            <IconButton  onClick={() => setOpen(!open)}>
                <MenuIcon />
            </IconButton>
        </React.Fragment>
     );
}
 
export default DrawerComp;
