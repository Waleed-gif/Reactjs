import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import { Toolbar, Typography, Button } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Header = () => {
    const  [value, setValue] = useState();


    return(
            <React.Fragment>
                <AppBar sx={{backgroundColor: '#063970',}}>
                    <Toolbar>
                        <Typography> <ShoppingCartIcon /> </Typography>
                        <Tabs textColor="inherit" value={value} onChange={(e,value) => setValue(value)} indicatorColor="secondary">
                            <Tab label="Home" />            
                            <Tab label="About" />            
                            <Tab label="Blogs" />            
                            <Tab label="Services" />            
                            <Tab label="Contact" />      
                        </Tabs>
                        <Button sx={{marginLeft: 'auto',}} variant='contained'>LOGIN </Button>
                        <Button sx={{marginLeft: '10px',}} variant='contained'>SIGNUP </Button>
                    </Toolbar>
                    {/* <DrawerComp />  */}
                </AppBar>
            </React.Fragment>
    )
}
export default Header;