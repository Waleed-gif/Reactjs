import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Alert, AlertTitle, ButtonBase, CircularProgress, Grid, IconButton, LinearProgress, Paper, TableHead, TableRow, Tooltip, Typography } from '@mui/material';
import Delete from '@mui/icons-material/Delete';
import Fingerprint from '@mui/icons-material/Fingerprint';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import NavigationIcon from '@mui/icons-material/Navigation';
import EditIcon from '@mui/icons-material/Edit';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { FormControlLabel, RadioGroup } from '@mui/material';
import Radio from '@mui/material/Radio';
import Rating from '@mui/material/Rating';
import Slider from '@mui/material/Slider';
import Switch from '@mui/material/Switch';
import { TextField, Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Divider, Avatar, AvatarGroup, Badge } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import {useState, useEffect} from 'react';
import { styled } from '@mui/material/styles';
import ColorToggleButton from './task1';


const Btn = () => {
    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    });
    const [value, setValue] = useState(false)
    const handleChange = (e) => {
        setValue(e.target.checked);
    }
    // const [progress, setProgress] = useState(0);
    // useEffect(() => {
    //     const timer = setInterval(() => {
    //     setProgress((oldProgress) => {
    //         if (oldProgress === 100) {
    //         return 0;
    //         }
    //         const diff = Math.random() * 10;
    //         return Math.min(oldProgress + diff, 100);
    //     });
    //     }, 500);

    //     return () => {
    //     clearInterval(timer);
    //     };
    // }, []);

    return ( 
    <>
    <h1>Button Passes Prop</h1>
    <ColorToggleButton />


    <h1>Switch</h1>
    <p>{String(value)}</p>
    <Switch
        checked={value}
        onChange={handleChange}
        name="switch"
        color="success"
        disabled={false}
    />


    <h1>Grid</h1> 
    <h3>Spacing || Direction</h3>
    <Grid container spacing={2} direction='row'>
        
        <Grid item lg={3} md={4} sm={6} xs={12}>
            <Box bgcolor='primary.light' p={5} textAlign='center'>1</Box>
        </Grid>
        
        <Grid item lg={3} md={8} sm={6}  xs={12}>
            <Box bgcolor='secondary.dark' p={5} textAlign='center'>2</Box>
        </Grid>

        <Grid item lg={3} md={8} sm={6}  xs={12}>
            <Box bgcolor='success.main' p={5} textAlign='center'>3</Box>
        </Grid>

        <Grid item lg={3} md={4} sm={6}  xs={12}>
            <Box bgcolor='warning.light' p={5} textAlign='center'>4</Box>
        </Grid>
    </Grid>

    <h1>Complex Grid With paper</h1>
    <Paper elevation={5} sx={{ p: 2, margin: 'auto', flexGrow: 1, }} >
        <Grid container spacing={2}>
            <Grid item lg={4} md={6} sm={6} sx={12}>
                <Paper >
                    <Img alt="complex" src="https://cdn.pixabay.com/photo/2020/12/14/15/44/man-5831234_960_720.jpg" />
                </Paper>
            </Grid>
            <Grid item lg={8} md={6} sm={6} sx={12} >
                <Grid container>
                    <Grid item lg={12} md={12} sm={12} sx={12}>
                        <Typography variant="h3" component="div">
                            Standard license
                        </Typography>
                    </Grid>
                    <Grid item sx={12}>
                        <Typography variant="caption" component="div" >
                        One beautiful spring day, a red rose blossomed in a forest. 
                        Many kinds of trees and plants grew there. As the rose looked around, 
                        a pine tree nearby said, “What a beautiful flower! I wish I was that lovely.” 
                        Another tree said, ” Dear Pine, do not be sad, we can’t have everything.” 
                        The rose turned its head and remarked, “It seems that I am the most beautiful plant in the forest.” 
                        A sunflower raised its yellow head and asked, “In this forest there are many beautiful plants. 
                        You are just one of them.” The red rose replied, “I see everyone admiring me.” 
                        Then the red rose looked at a cactus and said, “Look at that ugly plant full of thorns!” 
                        </Typography>
                    </Grid>
                </Grid>
                
            </Grid>
        </Grid>
    </Paper>



        
    <h3>Text Button</h3>
        <Button>Click it</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="primary" href="https://google.com">Primary</Button>
        <Button disabled>Disabled</Button>

        <h3>Contained Button</h3>
        <Button variant='contained'>Click it</Button>
        <Button variant='contained' color="secondary">Secondary</Button>
        <Button variant='contained' color="success">Secondary</Button>

        <h3>Outlined Button</h3>
        <Button variant='outlined'>Click it</Button>
        <Button variant='outlined' color='secondary'>Secondary</Button>
        <Button variant='outlined' href='#' color='info'>Color</Button>

        <h3>Button Sizes</h3>
        <Button variant='contained' color='success' size='small'>Click it</Button>
        <Button variant='contained' color='error' size='medium'>Secondary</Button>
        <Button variant='contained' color='warning' size='large'>Color</Button>
        <Button variant='contained' onClick={() => console.log('Button Event')} color='success' size='medium'>Event Click</Button>

        <h3>Button with Icons, Label & ICONS</h3>
        <Button variant='outlined' color='error' startIcon={<DeleteIcon />}>
        Delete</Button>
        <Button variant='contained' endIcon={<SendIcon/>}>Send</Button>
        <p>ICON & their Sizes,  Colors</p>
        <IconButton aria-label='delete' color='warning' size='medium'> <Delete fontSize='medium' /> </IconButton>
        <IconButton aria-label='add an alarm' color='info' size='medium'> <AlarmIcon /> </IconButton>
        <IconButton aria-label='add to shoppibg cart' color='success' size='small'> <AddShoppingCartIcon fontSize='small'/> </IconButton>
        <IconButton aria-label='fingerprint' color='info'> <Fingerprint /> </IconButton>

        <h3>Button Group</h3>
        <ButtonGroup variant='contained' color='success' orientation='vertical'>
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
        </ButtonGroup>

        <h3>Floating </h3>
        <Box>
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
            <Fab color="secondary" aria-label="edit">
                <EditIcon />
            </Fab>
            <Fab variant="extended">
                <NavigationIcon />
                Navigate
            </Fab>
        </Box>
        
        <h3>Check Box</h3>
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
            <Checkbox onChange={() => console.log('Done')} />
            <FormControlLabel control={<Checkbox  />} label='Pakistan' />
            <FormControlLabel control={<Checkbox  />} label='Sahiwal' labelPlacement='start' />

        <h3>|| Radio Button || Rating || Slider || Switch || Text Field ||</h3>
            <Radio value='male' name='radio-button' />  
            <FormControlLabel control={<Radio />} label='Female' labelPlacement='Start' />   
            <FormControlLabel control={<Radio />} label='Male' />

            <RadioGroup row >
                <FormControlLabel control={<Radio />} label='Student 1' labelPlacement='Start' />
                <FormControlLabel control={<Radio />} label='Student 2' labelPlacement='Start' />
                <FormControlLabel control={<Radio />} label='Student 3' labelPlacement='Start' />
            </RadioGroup>
        <h3>Rating</h3>
            <Rating /> <br/>
            <Rating value={3} readOnly /><br />
            <Rating defaultValue={2.5} precision={0.5}/>
        <h3>Slider</h3>
            <Slider defaultValue={30} color='secondary'/>
        <h3>Switch</h3>
            <Switch />
            <Switch defaultChecked disabled/>
            <FormControlLabel control={<Switch  color='success'/>} label='Dark Mode' />
        <h3>Text Field</h3>
            <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' },}} 
                    noValidate autoComplete="off">
                <TextField label='Name' /> <br />
                <TextField variant='outlined' label='Password' type='password' /> <br />
                <TextField variant='filled' label='Password' type='password' /> <br />
                <TextField variant='standard' label='Number' type='number' /> <br />
            </Box>

        <h1>|| Stack Component || System Key's ||</h1>
        
        <h3>System Keys/Props</h3>
            <h3>Alignment</h3>
                <Box textAlign='left'>Left Align</Box>
                <Box textAlign='center'>Center Align</Box>
                <Box textAlign='right'>Right Align</Box>
        
            <h1> Font ___ ||  Weight || Size || Style || Family || Spacing || Color || BackgroundColor || Padding </h1>
                <Box sx={{fontWeight:'bold', color: 'primary.dark', bgcolor: 'warning.light', paddingLeft: 15, width: '25%' }}>Bold</Box>
                <Box sx={{fontWeight:'regular', color: 'secondary.dark', paddingTop: 5, border: 2, borderColor:"secondary.dark" }}>Light</Box>
                <Box sx={{fontWeight: 500, color: 'success.main',bgcolor: 'info.light', paddingBottom: 5}} >Bold</Box>
                <Box sx={{fontSize:24, color: 'primary.dark'}}>Twenty Four</Box>      
                <Box sx={{fontStyle:'oblique', color: 'secondary.dark', bgcolor: 'error.light'}}>Twenty Four</Box>
                <Box sx={{fontFamily:'Verdana', color: 'warning.main'}}>Font Family</Box>
                <Box sx={{letterSpacing: 10, color: 'secondary.main', bgcolor: 'primary.light'}}>Spacing</Box>
                <Stack 
                    spacing={2} 
                    direction='row'
                    divider = {<Divider orientation='vertical' flexItem />} >      
                    <Button variant='contained'>Click it</Button>
                    <Button variant='contained' color="secondary">Secondary</Button>
                    <Button variant='contained' color="success">Secondary</Button><br />       
                </Stack>
        
        <h3>Avatar</h3>
            <Stack direction='row' spacing={2}>      
                <AvatarGroup max={4}>
                    <Avatar alt="icon" variant="rounded"> <Fingerprint /></Avatar>
                    <Avatar alt="icon" sx={{bgcolor: 'success.main'}}> <AssignmentIcon /></Avatar>
                    <Avatar alt="icon" variant="rounded"> <Fingerprint /></Avatar>
                    <Avatar alt="icon" sx={{bgcolor: 'success.main'}}> <AssignmentIcon /></Avatar>
                    <Avatar src='https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_960_720.jpg'/>
                </AvatarGroup>
            </Stack>
        
        <h3>Badge</h3>
            <Badge badgeContent={100} color='primary' max={50}>
                <AssignmentIcon sx={{color: 'success.main'}} />
            </Badge>
        
        <h1>Chips</h1>
        <Stack direction='row' spacing={1} >
            <Chip label='Chip Filled' />
            <Chip label='Chip Outlined' variant='outlined' />
            <Chip label='Clickable' onClick={()=> console.log('Chip Clicked')} />
            <Chip avatar={<Avatar alt="Waleed" src="https://cdn.pixabay.com/photo/2020/06/01/22/23/eyes-5248678_960_720.jpg" />}
                    label="Avatar" variant="outlined"  />  
        </Stack>
        
        <h1>Divider</h1>
        <Divider textAlign='center' sx={{color: 'error.main'}}>Text</Divider>
        
        <h1>Lists</h1>
        <List>
        <Divider textAlign='center'>ListsItem-I</Divider>
        <ListItem>
            <ListItemAvatar>
                <Avatar>
                    <ImageIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItem>
        <Divider textAlign='center'>ListsItem-II</Divider>
        <ListItem>
            <ListItemAvatar>
                <Avatar sx={{bgcolor: 'warning.light'}}>
                    <WorkIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Photos" secondary="Feb 23, 2000" />
        </ListItem>
        </List>
        <Divider />

        <h1>Tables</h1>
        <Table>
            <TableHead>
                <TableRow >
                    <TableCell align='center'>نمبر شمار</TableCell>
                    <TableCell align='right'>نام</TableCell>
                    <TableCell align='right'>رول نمبر</TableCell>
                    <TableCell align='right'>کلاس</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell component="th" scope="row">1</TableCell>
                    <TableCell align='right'>Waleed</TableCell>
                    <TableCell align='right'>29</TableCell>
                    <TableCell align='right'>Computer Science</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell component="th" scope="row">1</TableCell>
                    <TableCell align='right'>Khizer</TableCell>
                    <TableCell align='right'>32</TableCell>
                    <TableCell align='right'>Chemistry</TableCell>
                </TableRow>
            </TableBody>
        </Table>

        <h1>ToolTip || Alert || Progress</h1>
        <h3>ToolTip</h3>
        <Tooltip title='Delete'>
            <IconButton>
                <DeleteIcon />
            </IconButton>
        </Tooltip>
        <h3>Alert</h3>
        <Alert variant='filled' severity='success'>
            <AlertTitle> Success Alert</AlertTitle>
            This is a success Alert - <strong>Check it Out!</strong>
        </Alert>
        <h3>Progress</h3>
        
        <CircularProgress color='secondary' />
        {/* <Box sx={{ width: '100%' }}>
            <LinearProgress variant="determinate" value={progress} />
        </Box> */}
    </>
     );
}
 
export default Btn;