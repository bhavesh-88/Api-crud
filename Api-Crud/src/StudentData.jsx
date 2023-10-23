import React, { useEffect, useState, } from 'react'
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';

export default function StudentData() {

    const [userdata, setUserdata] = useState([])
    const navigate = useNavigate()
    const img = "https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"


    // We store fetch API in one variable and use it many time in project
    const getStudentdata = () => {
        fetch("http://localhost:5000/students").then((result) => {
            return result.json().then((resp) => {
                // console.log(resp);
                setUserdata(resp)
            })
        })
    }
    const handleedit = (id) => {
        navigate(`/studentedit/${id}`)
        // navigate("/editstudentdata/" + id)
    }
    const handledetail = (id) => {
        navigate(`/Studentdetail/${id}`)
        // navigate("/Studentdetail/" + id)
    }

    useEffect(() => {
        // fetch("http://localhost:2000/students").then((result) => {
        //     return result.json().then((resp) => {
        //         // console.log(resp);
        //         setUserdata(resp)
        //     })
        // })
        let role = sessionStorage.getItem('role')
        if (role !== "admin") {
            navigate("/login")
        }
        else {

            getStudentdata()
        }
    }, [])

    function handledel(id) {
        if (window.confirm('Do you want to remove?')) {
            fetch(`http://localhost:5000/students/${id}`, {
                method: "DELETE",
            }).then((result) => {
                result.json().then((resp) => {
                    alert('Removed successfully.')
                    // navigate("/")
                    // fetch("http://localhost:2000/students").then((result) => {
                    //     return result.json().then((resp) => {
                    //         // console.log(resp);
                    //         setUserdata(resp)
                    //     })
                    // })
                    getStudentdata()
                })
            })
        }
    }


    return (
        <>
            <h1 className='text-center fw-bold text-decoration-underline fst-italic'>Student data</h1>

            <MDBTable className='w-75 mx-auto' align='middle' border="1px" style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                <MDBTableHead>
                    <tr>
                        <th colSpan="6" className='text-center'>
                            <Link to="/login">
                                <MDBBtn className=' text-dark mx-1 bg-info bg-gradient' rounded size='sm'>Log-Out</MDBBtn>
                            </Link>
                        </th>
                    </tr>
                    {/* <tr>
                        <th colSpan="5" className='text-center'>
                            <Link to="/createuser">
                                <MDBBtn className=' text-dark mx-1 bg-info bg-gradient' rounded size='sm'>Add New User</MDBBtn>
                            </Link>
                        </th>
                    </tr> */}
                    <tr className='fw-bold text-decoration-underline fs-4'>
                        <th className='text-light bg-gradient' scope='col'>Id</th>
                        <th className='text-light bg-gradient' scope='col'>Name</th>
                        <th className='text-light bg-gradient' scope='col'>Email</th>
                        <th className='text-light bg-gradient' scope='col'>Password</th>
                        <th className='text-center text-light bg-gradient' scope='col'>Role</th>
                        <th className='text-center text-light bg-gradient' scope='col'>Actions</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {
                        userdata.map((data) =>
                            <tr >
                                <td className='text-light bg-gradient'>{data.id}</td>
                                <td className='text-light bg-gradient'>{data.name}</td>
                                <td className='text-light bg-gradient'>{data.email}</td>
                                <td className='text-light bg-gradient'>{data.password}</td>
                                <td className='text-light bg-gradient'>{data.role}</td>
                                <td className='text-center'>
                                    <MDBBtn onClick={() => { handleedit(data.id) }} className='text-dark mx-1 bg-primary bg-gradient' rounded size='sm'>Edit</MDBBtn>
                                    <MDBBtn onClick={() => handledetail(data.id)} className='text-dark mx-1 bg-secondary bg-gradient' rounded size='sm'>Details</MDBBtn>
                                    <MDBBtn onClick={() => handledel(data.id)} className='text-dark mx-1 bg-danger bg-gradient' rounded size='sm' >Delete</MDBBtn>
                                </td>
                            </tr>
                        )
                    }


                </MDBTableBody>
            </MDBTable>
        </>
    );
}