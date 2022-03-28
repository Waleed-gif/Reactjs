import React, {useState, useEffect} from 'react'
import {Checkbox, Drawer, Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material';
import NumbersIcon from '@mui/icons-material/Numbers';
import PersonIcon from '@mui/icons-material/Person';
import HeightIcon from '@mui/icons-material/Height';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import EmailIcon from '@mui/icons-material/Email';
import { Paper } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';


export default function BasicTable() {
    const data = [
         {id:1, name: "Waleed", age: 22, height: 5.2, email: "user1@gmail.com" },
         {id:2, name: "Khizer", age: 10, height: 4.0, email: "user2@gmail.com" },
         {id:3, name: "Ali Saad", age: 22, height: 5.9, email: "user3@gmail.com" },
         {id:4, name: "Haider", age: 22, height: 6.2, email: "user4@gmail.com" },
         {id:5, name: "Waleed", age: 22, height: 5.2, email: "user5@gmail.com" },
         {id:6, name: "Hamza", age: 10, height: 4.0, email: "user6@gmail.com" },
         {id:7, name: "Mudasar", age: 22, height: 5.9, email: "user7@gmail.com" },
         {id:8, name: "Haider", age: 22, height: 6.2, email: "user8@gmail.com" },
         {id:9, name: "Waleed", age: 22, height: 5.2, email: "user9@gmail.com" },
         {id:10, name: "Uzair", age: 10, height: 4.0, email: "user10@gmail.com" },
         {id:11, name: "Saad", age: 22, height: 5.9, email: "user11@gmail.com" },
         {id:12, name: "Awais", age: 22, height: 6.2, email: "user12@gmail.com" },
    ];

    const [rows, setRows] = useState(data);
    const [search, setSearch] = useState('');

//Drop Down Menu in Table
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

//Search with filter in Functions
    const inputEvent = (event) => {
        const data = event.target.value;
        console.log(data,"Data input");
        setSearch(data);
    };

    function getFiltered(rows) {
        const fil = rows.filter((val) => {
            if (search == "") {
                // console.log(val);
                return val;
            }else if (val.name.toLowerCase().includes(search.toLowerCase())) {
                    console.log(val);
                    return val;
            }
          })
            //console.log(fil, "filtered Array");
            return fil;
        };
        // const row =useState(getFiltered());
        // console.log(row);

//checkbox value Validation
        const [check, setCheck] = useState([]);
        const getValue = (e, row) => {
            let checked = check;
            checked.push(row);
            if (checked != '') {
                    setCheck(checked);
                    //console.log(checked, "CheckBox");
            }else if(checked == ''){
                setCheck([]);
            }
            console.log(checked,"Function value");
            return checked;
        }


//Delete Event
const deleteItem = ()=> {   
    console.log(check,"checkcheckcheck");     
    var del = getFiltered(rows).filter((e) => !check.includes(e));
    alert("Are you sure " + check);
    console.log(del,"Sorted Array After Delete ");
    setRows(del);
}

//View Event
    const [state, setState] = useState(false);
    const toggleDrawer = (anchor, open) => (event) => {
        setState({ ...state, [anchor]: open });
    };

    const list = (data) =>(
        <Box>
            <p>Drawer Component Value...</p>
        </Box>
    );


    return(
    <React.Fragment>
    <Paper>
        <input 
            type="search"   
            onChange={inputEvent}
            value={search}
            placeholder="Search..." 
        />
        <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
        > <MenuIcon />  </Button>
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
        >
            <MenuItem onClick={handleClose}>
                <Button onClick={toggleDrawer(data, true)}>View</Button>
                <Drawer
                    data={data}
                    open={state[data]}
                    onClose={toggleDrawer(data, false)}
                >{list(data)}
                </Drawer>
                
                
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <Button>Update</Button>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <Button
                    onClick={() => deleteItem()}
                >Delete</Button>
            </MenuItem>
        </Menu>
        <Table aria-label="table">
            <TableHead sx={{backgroundColor: "lightblue"}} >
                <TableRow>
                    <TableCell align='center'> CheckBox </TableCell>
                    <TableCell align='center'> <NumbersIcon /> </TableCell>
                    <TableCell align='center'> <PersonIcon /> </TableCell>
                    <TableCell align='center'> <AvTimerIcon /> </TableCell>
                    <TableCell align='center'> <HeightIcon /> </TableCell>
                    <TableCell align='center'> <EmailIcon /> </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {getFiltered(rows).map((row) => (
                <TableRow key={row.id}>
                    <TableCell align='center'> 
                        <Checkbox 
                            name="check"
                            // value={check.find((x) => x.id == row.id)} 
                            value={check}
                            onChange={(e) => {getValue(e,row)}}    
                        /> 
                    </TableCell>
                    <TableCell align='center'>{row.id} </TableCell>
                    <TableCell align='center'>{row.name} </TableCell>
                    <TableCell align='center'>{row.age} (Year) </TableCell>
                    <TableCell align='center'>{row.height} (Feet) </TableCell>
                    <TableCell align='center'>{row.email} </TableCell>
                    
                </TableRow>
                ))}

            </TableBody>
        </Table>       
    </Paper>

    </React.Fragment>
    )
}