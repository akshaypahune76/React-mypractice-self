import React from 'react'

export default function ChildTwo(props:any) {
  console.log("log run with child two" )
  const {userstate,userdetails:{name,authentication}} = props.checkUsers;

  return (
    <div>
      <h2>Hi This Is Child Two Component</h2>
      <div>User Details comes from parent</div>
      <ul>
        <li>User Details Name :{name}</li>
        <li>User Details Auth :{authentication}</li>
      </ul>
    </div>
  )
}
