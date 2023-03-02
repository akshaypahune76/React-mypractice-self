import { count } from "console";
import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate, useNavigation } from "react-router-dom";
import BasicButtonscommon from "../commonComponunt/BasicButtonCommon";


// Define function component we can fallow the function structure . that structure should be normal function or arrow function. Right now i am using arrow function to define component.

const LoginComponent = () => {

// function component will use the deferent type of hooks, function component dont have they own lifcycle like class component . for execution internal things use hooks only

// hooks: hooks are method is use to manupulate component state within your component
// different kind of hooks will use which are perform lifecycle.

// hooks: useState, useEffect, useRef, useMemo, useCallback.

// useState: it is use to define the component state.

const navigate = useNavigate()

const [userdetails, setUserdeatils] = useState<any>({
    name: " ",
    phoneno: 8520,
    adddetails: [
        {id:1, address1:'',address2:''}
    ],
    yesorno: false
});

const [count, setCount]=useState(0);

// userdetails : will contain all data which used within your component
// setUserdeatils : this is method to use update state within component

const inputHandler = () =>{
    // setUserdeatils({
    //     ...userdetails,
    //     name:"name change after click",
    //     phoneno: 9510357,
    // })
    setCount(count + 1)
}

const methodoncall=()=>{
    console.log("method need to call on component load");
    setUserdeatils({
        ...userdetails,
        name:"state update on mount phase",
        phoneno: 9510357,
    });
}

// how life cycle will achieve in function component;

// useEffect : this hooks will help to achieve lifecycle of component.

useEffect(() => {

    // this area will execute mounting phase of component.
    // if(count>4){
    //     methodoncall();
    // }
    // methodoncall();
    // setInterval(()=>{
    //     inputHandler()
    // },2000);
    return () => {
    // unmounting phase of function component 
    // will unsubcribe all the call and continuous process.
    // clearInterval('')
    };
},[count]); // dependency array => it will use to triggle the changes between state and base on that we can re-render the component.need to specify that dependency into this array. this is update phase but it will work based on dependencies.

const navigatetoaddress = ()=> {
    navigate ('/address')
}
       const [starvalue, setStarvalue] = useState<any>(0);
       const [buttonProps, setbuttonProps] = useState({
        variant:'contained',
        label:'Login submit Button'
    });
    return(
    <>
    {/* {console.log('userdeatil',userdetails)}
    <h1>This is function Component type</h1>
    <h2>bind component state: {userdetails.name}</h2>
    <h2>phone no: {userdetails.phoneno}</h2>
    <div>count value: {count}</div>
    <input type={'button'} value={'change state'} onClick={inputHandler} /> */}
    <Form className="userLoginform">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Form.Select aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
    </Form.Select>

      <Button variant="primary" type="submit" onClick={navigatetoaddress}>
        Submit
      </Button>

      <BasicButtonscommon btnProps={buttonProps} />
      
    </Form>
    
    </>
    
    )
}

export default LoginComponent;