import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Admin = () => {
  const navigate = useNavigate()

  useEffect(() => {
      let user = sessionStorage.getItem('name')
      let role = sessionStorage.getItem('role')
      if (user === "" || user === null || role !== 1) {
          console.log("Called");
          navigate('/login')
      }
  },[])
    return ( 
        <>

          <h1>Admin</h1>
        </>
     );
}
 
export default Admin;