import React, {useState, useEffect} from 'react'
import {Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material';
import NumbersIcon from '@mui/icons-material/Numbers';
import PersonIcon from '@mui/icons-material/Person';
import HeightIcon from '@mui/icons-material/Height';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import EmailIcon from '@mui/icons-material/Email';
import { Paper } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import IconButton from '@mui/material/IconButton';

// making Function of data and use varabile row to store it
    // function data(id, name, age, height, email){
    //     return { id, name, age, height, email};
    // }
    // const rows = [
    //     data(1, "Waleed", 22, 5.7, "waleed@gmail.com"),
    //     data(2, "Khizer", 10, 4.0, "khizer@gmail.com"),
    //     data(3, "Ali Saad", 22, 5.9, "ali@gmail.com"),
    //     data(4, "Haider", 22, 6.1, "haider@gmail.com")
    // ];

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
    

    const inputEvent = (event) => {
        const data = event.target.value;
        console.log(data,"Data input");
        setSearch(data);
    };

    function getShortMessages() {
        {rows.filter((val) => {
            if(search == ""){
                console.log(val,"if");
            }
            else if(val.name.toLowerCase().includes(search.toLowerCase())){
                let arr = [];
                arr.push(val)
                setRows(arr);
                console.log(val,"else");
            }
            })}
    }
    // const msg = getShortMessages();
    //which line is written in this piece of code??
    useEffect(()=> {
        getShortMessages();
    }, [search]);   
    
    //console.log(search,"searchsearch");
    
    return(
    <React.Fragment>
    <Paper>
        <input 
            type="search" 
            onChange={inputEvent}
            value={search}
            placeholder="Search..." 
        />
        <Table aria-label="table">
            <TableHead sx={{backgroundColor: "lightblue"}} >
                <TableRow>
                    <TableCell align='center'> <NumbersIcon /> </TableCell>
                    <TableCell align='center'> <PersonIcon /> </TableCell>
                    <TableCell align='center'> <AvTimerIcon /> </TableCell>
                    <TableCell align='center'> <HeightIcon /> </TableCell>
                    <TableCell align='center'> <EmailIcon /> </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow key={row.id}>
                    <TableCell align='center'>{row.id}</TableCell>
                    <TableCell align='center'>{row.name}</TableCell>
                    <TableCell align='center'>{row.age} (Year)</TableCell>
                    <TableCell align='center'>{row.height} (Feet) </TableCell>
                    <TableCell align='center'>{row.email}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>       
    </Paper>
    </React.Fragment>
    )
}