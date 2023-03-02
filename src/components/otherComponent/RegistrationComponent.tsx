import { Box, FormControlLabel, MenuItem, Radio, RadioGroup, Select, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import BasicButtonscommon from "../commonComponunt/BasicButtonCommon";

const cityList = [
    { id:1, cityname:'pune', statecode:'mh'},
    { id:2, cityname:'nagpur', statecode:'mh'},
    { id:2, cityname:'wardha', statecode:'mh'},
    { id:2, cityname:'mumbai', statecode:'mh'},
    { id:2, cityname:'amaravti', statecode:'mh'},
    { id:2, cityname:'nanded', statecode:'mh'},
    { id:2, cityname:'yavtmal', statecode:'mh'},
    { id:2, cityname:'gondia', statecode:'mh'},
    { id:2, cityname:'chandrapur', statecode:'mh'},
    { id:3, cityname:'Ahmdabad', statecode:'gj'},
    { id:4, cityname:'hydrabad', statecode:'hy'}
    ]

export default function RegistrationComponent(){ 
  const [formProps, setformProps] = useState({
        name:{
            label: "User Name",
            name: "uname",
            value: ""
        },
        phoneNo:{
            label: "Phone No",
            name: "phonno",
            value: "",
        },
        address:{
            label: "Address",
            name: "add",
            value: "",
        }
    })

    
 const [userData, setuserData] = useState<any>({});
 const [btnProperty, setbtnProperty] = useState({
      label:'Submit',
      variant:'contained'
    })

 const [citylist, setcitylist] = useState<any>([]);

    
 const captureUserDetails=(e:any)=>{
        // console.log("capture event",e)
        setuserData({
            ...userData,
            [e.target.name]:e.target.value
        })
    }

 const submitUserData=()=>{
   console.log("submit data",userData)
  }

    const captureStateDetails=(e: any)=>{
     const stateValue= e.target.value;
     setuserData({
      ...userData,
      [e.target.name]:stateValue
     });
    

      const filterCity = cityList.filter((item: any)=> item.statecode === stateValue);
    
      console.log('filter city',filterCity)
      setcitylist([...filterCity]);
    }

    return(
        <>
        <h1>Register Yourself</h1>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      {/* <BasicTextFields formProps={formProps.name} onChangeinput={captureUserDetails}/>
      <BasicTextFields formProps={formProps.phoneNo} />
      <BasicTextFields formProps={formProps.address} /> */}
      <TextField 
      id="outlined-basic" 
      label={'User Name'} 
      variant="outlined" 
      name={'uname'} 
      onChange={captureUserDetails} 
      />
      <TextField 
      id="outlined-basic" 
      label={'Phone No'} 
      variant="outlined" 
      name={'phonno'} 
      onChange={captureUserDetails} 
      />
      <TextField 
      id="outlined-basic" 
      label={'Address'} 
      variant="outlined" 
      name={'add'} 
      onChange={captureUserDetails}
       />
        <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="gender"
        onChange={captureUserDetails} 
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
      
      <Select
          labelId='demo-simple-select-state'
          id='demo-simple-select-state'
          value={userData.state? userData.state:'Select State'}
          name='state'
          onChange={captureStateDetails}
        >
          <MenuItem value={'mh'}>Maharastra</MenuItem>
          <MenuItem value={'gj'}>Gujrat</MenuItem>
          <MenuItem value={'hy'}>Hydrabad</MenuItem>
        </Select>
        <Select
          labelId='demo-simple-select-city'
          id='demo-simple-select-city'
          value={userData.city? userData.city:'Select City'}
          name='city'
          onChange={captureUserDetails}
        >
            {citylist && citylist.map((item:any, index:any)=>(
            <MenuItem value={item.cityname} key={index}>{item.cityname}</MenuItem>
           ) )}
          
        </Select>
      <BasicButtonscommon btnProps={btnProperty} btnClickHandler={submitUserData}/>     
    </Box>
    {console.log("userdata state value",userData)}
        </>
    );
}





