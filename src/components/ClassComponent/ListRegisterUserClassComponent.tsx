import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { getRequest } from '../../api/apiUrls';
import { USER_LIST } from '../../api/api';

const columns: GridColDef[] = [
    { field: 'firstname', headerName: 'First name', width: 130 },
    { field: 'lastname', headerName: 'Last name', width: 130 },
    { field: 'username', headerName: 'User name', width: 130 },
    { field: 'state', headerName: 'State', width: 130 },
    { field: 'city', headerName: 'City', width: 130 },
    { field: 'add', headerName: 'Address', width: 130 },
    { field: 'zipCode', headerName: 'Zip Code', width: 130 },
    { field: 'email', headerName: 'Email', width: 130 },
    { field: 'phoneno', headerName: 'Phone No', width: 130 },
    { field: 'gender', headerName: 'Gender', width: 130 },
]

class ListRegisterUserClassComponent extends Component <any,any> {
    static propTypes: {};
    constructor(props:any) {
        super(props)
        this.state = {
            userData:[]
        };
    }

    componentWillMount() {}

    componentDidMount() {

        //     let Temparr:any=[];

        getRequest(USER_LIST,'').then((response:any)=> this.setState({userData: response.data}));

    }

    // componentDidMount() {
    //     let Temparr:any=[];
    //     getRequest(USER_LIST,'').then((response:any)=> 
    //     {
    //         Temparr.push(response.data);this.setState(Temparr)
    //     }
    //   )
    //   }

    componentWillReceiveProps(nextProps:any) {

        getRequest(USER_LIST,'').then((response:any)=> this.setState({userData: response.data}));

    }

    // shouldComponentUpdate(nextProps, nextState) {

    // }

    // componentWillUpdate(nextProps:any, nextState:any) { 

    // }

    // componentDidUpdate(prevProps, prevState) {

    // }

    componentWillUnmount() {

    }

    render() {
        return (
            <>{console.log('props in child component',this.props)}
            {this.state.userData && this.state.userData.length > 0 ?
            (
                <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                rows={this.state.userData}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
                getRowId={row=>row._id}
                 />
             </div>
            ):(
                <h2> No Data Available</h2>
            )
            }
              
            </>
        );
    }
}

ListRegisterUserClassComponent.propTypes = {

};

export default ListRegisterUserClassComponent;