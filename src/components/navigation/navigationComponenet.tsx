import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import {Link, Outlet} from "react-router-dom"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import BasicTextFields from "../commonComponunt/BasicTextField";
import LoginComponent from "../login/LoginComponent";
import DataTable from "../otherComponent/DataTable";
import BasicRating from "../otherComponent/BasicRatingComponent";
import GridComplexExample from "../otherComponent/GridSystemComponentAddress";
import RowRadioButtonsGroup from "../otherComponent/RatioGroupComponent";
import RegistrationComponent from "../otherComponent/RegistrationComponent";
import StickyHeadTable from "../otherComponent/StickyHeadTablepopulation";
import WelComePage from "../otherComponent/WelComePage";
import ParentComponent from "../propsDrilling/parentComponent";
import ChildOne from "../propsDrilling/childOne";
import RegisterUserClassComponent from "../ClassComponent/RegisterUserClassComponent";
import StopwatchComponent from "../otherComponent/StopwatchComponent";
import ListRegisterUserClassComponent from "../ClassComponent/ListRegisterUserClassComponent";


const NavigationComponent =()=>{

    return(
        <>
            <BrowserRouter>
            <Navbar bg="primary" variant="dark">
               <Container>
                  <Link to="/">Dashboard</Link>
                  <Link to="/home">Home</Link>
                  <Link to="/login">Login</Link>
                  <Link to="/address">Address</Link>
                  <Link to="/child one">Child One</Link>
                  <Link to="/classComponent">Class Component</Link>
                  <Link to="/pricing">Pricing</Link>
                  <Link to="/registration">Register</Link>
                  <Link to="/Userlist">User List</Link>
               </Container>
           </Navbar>
        <Routes>
           <Route path="/" element={<WelComePage />} />
           <Route path="/home" element={<RowRadioButtonsGroup />} />
           <Route path="/login" element={<LoginComponent />} />
           <Route path="/address" element={<GridComplexExample />} />
           <Route path="/child one" element={<ChildOne/>} />
           <Route path="/classComponent" element={<RegisterUserClassComponent/>} />
           <Route path="/pricing" element={<BasicRating />} />
           <Route path="/registration" element={<RegistrationComponent />} />
           <Route path="/Userlist" element={<ListRegisterUserClassComponent />} />
        </Routes>
     </BrowserRouter>

          
           <Outlet />
        </>
    )
}

export default NavigationComponent;