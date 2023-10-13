import React,{useEffect, useState} from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';


export default function UserData() {

    const [userdata, setUserData]=useState([])

    const navigate = useNavigate();

    const Detail =(id)=>{
      navigate("/userdetail/" + id)
    }

    const Edit =(id)=>{
      navigate("/useredit/" + id)
    }

    useEffect(()=>{
        fetch("http://localhost:5000/students").then((result)=>{
            return result.json().then((resp)=>{
                console.log(resp);
                setUserData(resp)
            }).catch((error)=>{
                console.log(error.msg);
            })
        })
    },[])


    const Delete = (id) => {
      if (window.confirm('Do you want to remove?')) {
          fetch("http://localhost:5000/students/" + id, {
              method: "DELETE"
          }).then((res) => {
              alert('Removed successfully.')
              window.location.reload();
          }).catch((err) => {
              console.log(err.message)
          })
      }
  }


    return (
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>ID</th>
          <th scope='col'>NAME</th>
          <th scope='col'>EMail</th>
          <th scope='col'>PASSWORD</th>
          <th scope='col'>ROLE</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
            <td><Link to="/useradd" ><button className="btn btn-success">ADD USER</button></Link></td>
        </tr>
        {
            userdata && userdata.map((user)=>
            <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.role}</td>
                <td className='text-center'>
                    <button className="btn btn-primary" onClick={()=>{Edit(user.id)}}>Edit</button>
                    <button className="btn btn-secondary" onClick={()=>{Detail(user.id)}}>Details</button>
                    <button className="btn btn-danger" onClick={()=>{Delete(user.id)}}>Delete</button>
                </td>
            </tr>
            )
        }        
      </MDBTableBody>
    </MDBTable>
  );
}