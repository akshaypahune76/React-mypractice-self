import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import BasicButtonscommon from '../commonComponunt/BasicButtonCommon';
import { useState } from 'react';

export default function RowRadioButtonsGroup() {
  const [starvalue, setStarvalue] = useState<any>(0);
  const [buttonProps, setbuttonProps] = useState({
      variant:'contained',
      label:'home Button'
  });
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="other"
        />
      </RadioGroup>
      
      <ul>
            <li><a href="http://www.facebook.com">Facebook</a></li>
            <li><a href="http://www.google.com">Google</a></li>
            <li><a href="http://www.flipkart.com">Flipkart</a></li>
            <li><a href="http://www.amazon.com">Amazon</a></li>
            <li><a href="http://www.gmail.com">Gmail</a></li>
           
        </ul>

        <BasicButtonscommon btnProps={buttonProps} />
        
    </FormControl>
    
  );
}