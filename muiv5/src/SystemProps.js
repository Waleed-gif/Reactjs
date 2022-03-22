import { Box } from '@mui/material';


export default function SysProps() {
  return (
    <>    
        <h1>System Keys/Props</h1>
        <h3>Alignment</h3>
        <Box textAlign='left'>Left Align</Box>
        <Box textAlign='center'>Center Align</Box>
        <Box textAlign='right'>Right Align</Box>
        
        <h3> Font ___ ||  Weight || Size || Style || Family || Spacing || Color || BackgroundColor || Padding </h3>
        <Box sx={{fontWeight:'bold', color: 'primary.dark', bgcolor: 'warning.light', paddingLeft: 15, width: '25%' }}>Bold</Box>
        <Box sx={{fontWeight:'regular', color: 'secondary.dark', paddingTop: 5, border: 2, borderColor:"secondary.dark" }}>Light</Box>
        <Box sx={{fontWeight: 500, color: 'success.main',bgcolor: 'info.light', paddingBottom: 5}} >Bold</Box>
        <Box sx={{fontSize:24, color: 'primary.dark'}}>Twenty Four</Box>      
        <Box sx={{fontStyle:'oblique', color: 'secondary.dark', bgcolor: 'error.light'}}>Twenty Four</Box>
        <Box sx={{fontFamily:'Verdana', color: 'warning.main'}}>Font Family</Box>
        <Box sx={{letterSpacing: 10, color: 'secondary.main', bgcolor: 'primary.light'}}>Spacing</Box>
        {/* <Box border={1} borderRadius="50%" width={100} height={100} /> */}
    </>
  );
}
