import { TextField } from '@mui/material';
import React, { useState,useContext } from 'react'
import userStateContext from '../../contextApi/UserStateApi';
import ChildOne from './childOne';

export default function ParentComponent() {
 const [ Userstate , setuserstate] = useState();
 const [captureData, setcaptureData] = useState<any>('');
 const context = useContext(userStateContext);
 const { userstate ,userdetails:{name,authentication}} = context;

  return (
    <>
      {console.log("context value in parent",context)}
      <TextField onChange={setcaptureData}/>
      <ul>
         <li>User State:{userstate}</li>
         <li>User Details Name :{name}</li>
         <li>User Details Auth :{authentication}</li>
       </ul>
      < ChildOne />
    </>
  );
 }



