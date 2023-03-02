import React, { useContext, useState } from 'react'
import context from 'react-bootstrap/esm/AccordionContext';
import userStateContext from '../../contextApi/UserStateApi';
import ChildTwo from './childTwo';

export default function ChildOne(props:any) {
  console.log("log run with child one" );
  const context = useContext(userStateContext);
  const {userstate,userdetails:{name,authentication}} = context;
  const [makechange, setmakechange] = useState({
      userstate:'offline',
      userdetails:{
          name:'user2',
          authentication:'false'}
  });
  
  return (
    <>
      {console.log("context value child one",context)}
      < userStateContext.Provider value={makechange}>

      <h2>Hi This Is Child One Component</h2>
      <div> User Details comes from parent</div>
      <ul>
        <li>User State:{userstate}</li>
        <li>User Details Name :{name}</li>
        <li>User Details Auth :{authentication}</li>
      </ul>
      
      </userStateContext.Provider>
      
      {/* < ChildTwo checkUsers={props.userdetails}/> */}
    </>
  )
}