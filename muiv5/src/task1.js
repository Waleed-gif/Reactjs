import {useState} from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ColorToggleButton() {

    const [alignment, setAlignment] = useState('react');
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

  return (
    <ToggleButtonGroup
      color="warning"
      value={alignment}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="react" sx={{bgcolor:'error.light', color:'white'}}>React</ToggleButton>
      <ToggleButton value="node" sx={{bgcolor:'success.light', color:'white'}}>Node JS</ToggleButton>
      <ToggleButton value="reactjs" sx={{bgcolor:'primary.light', color:'white'}}>React Native</ToggleButton>
    </ToggleButtonGroup>
  );
}
