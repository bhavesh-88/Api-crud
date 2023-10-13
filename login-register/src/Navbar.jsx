import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
} from 'mdb-react-ui-kit';
import { Link , Outlet} from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
      <MDBNavbar light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand><Link to="/">LOGO</Link></MDBNavbarBrand>
        {/* <MDBInputGroup tag="form" className='d-flex w-auto mb-3'> */}
            <Link to="login">Login</Link>
        {/* </MDBInputGroup> */}
      </MDBContainer>
    </MDBNavbar>
    <Outlet></Outlet>
    </div>
  )
}

export default Navbar
