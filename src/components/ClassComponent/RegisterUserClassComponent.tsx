import React , { Component } from 'react';
import PropTypes from 'prop-types';
import { Box, FormControlLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from "@mui/material";
import { useState } from "react";
import BasicButtonscommon from "../commonComponunt/BasicButtonCommon";
import BasicTextFields from '../commonComponunt/BasicTextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { getRequest, postRequest } from '../../api/apiUrls';
import { USER_LIST, USER_SAVE } from '../../api/api';
import BasicRating from '../otherComponent/BasicRatingComponent';
import ListRegisterUserClassComponent from './ListRegisterUserClassComponent';
export interface stateinterface{
    name:'string',
    btnproperty:{}
}

class RegisterUserClassComponent extends Component <any,any> {
    static propTypes: {};
    constructor(props: any) {
        super(props);
        this.state ={
           alluserList:[],
           Checkstate:false
        }
    }

    componentWillMount() {
        console.log("Will Mount Component")

    }

    componentDidMount() {
        console.log("Did Mount Component")

    }

    // after recived any certain props value then this method is executed.
    componentWillReceiveProps(nextProps: any) {
        console.log("Will Recived Props Component")

    }
    // this method only call while recived a props and props have some changes only.
    // shouldComponentUpdate(nextProps: any, nextState: any) {

    // }

    componentWillUpdate(nextProps: any, nextState: any) {
        console.log("Will Update Component")

    }

    componentDidUpdate(prevProps: any, prevState: any) {
        console.log("Did Update Component")

    }

    componentWillUnmount() {
        console.log("Will Unmount Component")

    }

    submitUserData = () => {
      console.log('submit method',this.state);

      if(this.state && Object.keys(this.state).length > 0 ){
        postRequest(USER_SAVE, this.state)
       .then(res => {
        if(res){
          //     this.getUserListSuccess();
          this.setState({Checkstate:true})
            }
           })
          .catch((error:any) => console.log(error))
       }
      }

      // getUserListSuccess=()=>{
      //     getRequest(USER_LIST,'').then((response:any)=> {
      //       console.log('response',response)
      //       this.setState({ alluserList: response.data})
      //     }).catch((error:any) => {console.log(error)})
      // }
      
    dataHandler =(e:any) => {
        // console.log('capture data',this.state)
        this.setState({
            [e.target.name]:e.target.value
           })
          
      }

    render() {
        return (
            <>
     <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      {/* <BasicTextFields formProps={formProps.name} onChangeinput={this.dataHandler}/>
      <BasicTextFields formProps={formProps.phoneNo} />
      <BasicTextFields formProps={formProps.address} /> */}
      <TextField 
      id="outlined-basic" 
      label={'First Name'} 
      variant="outlined" 
      name={'firstname'} 
      onChange={this.dataHandler} 
      />
      <TextField 
      id="outlined-basic1" 
      label={'Last Name'} 
      variant="outlined" 
      name={'lastname'} 
      onChange={this.dataHandler} 
      />
      <TextField 
      id="outlined-basic2" 
      label={'User Name'} 
      variant="outlined" 
      name={'username'} 
      onChange={this.dataHandler} 
      />
       <TextField 
      id="outlined-basic3" 
      label={'State'} 
      variant="outlined" 
      name={'state'} 
      onChange={this.dataHandler} 
      />
       <TextField 
      id="outlined-basic4" 
      label={'City'} 
      variant="outlined" 
      name={'city'} 
      onChange={this.dataHandler} 
      />
      <TextField 
      id="outlined-basic5" 
      label={'Address'} 
      variant="outlined" 
      name={'add'} 
      onChange={this.dataHandler}
       />
        <TextField 
      id="outlined-basic6" 
      label={'Zip Code'} 
      variant="outlined" 
      name={'zipCode'} 
      onChange={this.dataHandler}
       />
       <TextField 
      id="outlined-basic7" 
      label={'Email'} 
      variant="outlined" 
      name={'email'} 
      onChange={this.dataHandler}
       />
       <TextField 
      id="outlined-basic8" 
      label={'Phone No'} 
      variant="outlined" 
      name={'phoneno'} 
      onChange={this.dataHandler}
       />
        <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="gender"
        onChange={this.dataHandler} 
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
      
      {/* <Select
          labelId='demo-simple-select-state'
          id='demo-simple-select-state'
          value={userData.state? userData.state:'Select State'}
          name='state'
          onChange={this.dataHandler}
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
          onChange={this.dataHandler}
        >
            {citylist && citylist.map((item:any, index:any)=>(
            <MenuItem value={item.cityname} key={index}>{item.cityname}</MenuItem>
           ) )}
          
        </Select> */}
      {/* <BasicButtonscommon 
      btnProps={this.state} 
      btnClickHandler={this.submitUserData}/>      */}

      
     {/* <BasicRating/> */}

     <Button variant='contained' onClick={this.submitUserData}>Submit</Button>
     
    </Box>
    <Box>
      <Typography component = {'h1'}>User List </Typography>
    </Box>
          
          {/* <BasicRating/> */}
          <ListRegisterUserClassComponent DataSubmitted={true}/>
            </> 
        );
    }
}

RegisterUserClassComponent.propTypes = {

};


export default RegisterUserClassComponent;