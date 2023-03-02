import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { USER_LIST } from '../../api/api';
import BasicButtonscommon from '../commonComponunt/BasicButtonCommon';
import { DataGrid, GridColDef} from '@mui/x-data-grid';
import { getRequest } from '../../api/apiUrls';

const columns: GridColDef[] = [
  // { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstname', headerName: 'First Name', width: 130 },
  { field: 'lastname', headerName: 'Last Name', width: 130 },
  { field: 'username', headerName: 'User Name', width: 130 },
  { field: 'state', headerName: 'State', width: 130 },
  { field: 'city', headerName: 'City', width: 130 },
  { field: 'add', headerName: 'Address', width: 130 },
  { field: 'zipCode', headerName: 'Zip Code', width: 130 },
  { field: 'email', headerName: 'Email', width: 130 },
  { field: 'phoneno', headerName: 'Phone No', width: 130 },
  { field: 'gender', headerName: 'Gender', width: 130 },
];

export default function BasicRating(props: any) {
  const [userData, setuserData] = React.useState<any>([]);
  // console.log("props", props);

  React.useEffect(() => {
    return () => {}
  }, [])

  const showuserlist= () => {
    console.log("api url for user list", USER_LIST);
    // fetch(USER_LIST).then((response:any) =>
    // response.json()
    // ).then((userlist) =>
    // {console.log("response using fetch",userlist);
    // setuserData(userlist)})
  

  getRequest(USER_LIST,'').then((userlist:any)=>{
    console.log("response using axios",userlist);
    setuserData(userlist.data)
  }).catch((error:any) => console.log(error));
}

  return (

    <>
    <Box
      sx={{
        '& > legend': { mt: 2},
      }}
    > 
      <Typography component="legend">basic rating component</Typography>
      <Typography component="legend">{props.starRating }</Typography>
      <Rating name="no-value" value={props.starRating ? props.starRating:1} />
      <BasicButtonscommon btnClickHandler={showuserlist}/> 

    </Box>

    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={userData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        getRowId={row=>row._id}
      />
    </div>

    <ul className='userlist'>
    {userData && userData.map((data:any, index:any) => 
      <li key={index}>
      {/* <span>{data.id}</span> */}
      <span>{data.email}</span>
      <span>{data.first_name}</span>
      <span>{data.last_name}</span>
      <span><img src={data.avatar} alt=""/></span>
      </li>
    )}
    </ul>

    {/* <Table striped>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        {userData && userData.map((data:any, index:any) => 
        <tr key={index}>
         <td>{data.id}</td>
         <td>{data.name}</td>
         <td>{data.email}</td>
         <td>{data.body}</td>
       </tr>
        ) }
        
      </tbody>
    </Table> */}
     </>
  
  )
}





