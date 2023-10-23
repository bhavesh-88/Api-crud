import React, { useEffect, useState } from 'react'
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useNavigate, useParams } from 'react-router-dom';


const StudentDetail = () => {
    const { studentid } = useParams()
    const [userdata, setUserdata] = useState({})
    const navigate = useNavigate()
    const img = "https://mdbootstrap.com/img/new/ecommerce/vertical/001.jpg"



    useEffect(() => {

        fetch("http://localhost:5000/students/" + studentid).then((result) => {
            return result.json().then((resp) => {
                setUserdata(resp);
            })
        })
    }, [studentid])
    const handleback = () => {
        navigate("/studentdata")
    }

    return (
        <>
            <MDBTable className='w-50 mx-auto mt-5' align='middle' border="1px" style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                <MDBTableHead>
                    <tr>
                        <th colSpan="2" className='text-dark text-center'>Studentdetail</th>
                    </tr>

                </MDBTableHead>
                <MDBTableBody>
                    {
                        <>
                            <tr >
                                <td className='text-light bg-gradient'>Student Id:</td>
                                <td className='text-light bg-gradient'>{userdata.id}</td>
                            </tr>
                            <tr >
                                <td className='text-light bg-gradient'>Student Name:</td>
                                <td className='text-light bg-gradient'>{userdata.name}</td>
                            </tr>
                            <tr>

                                <td className='text-light bg-gradient'>Email:</td>
                                <td className='text-light bg-gradient'>{userdata.email}</td>
                            </tr>
                            <tr>

                                <td className='text-light bg-gradient'>Password:</td>
                                <td className='text-light bg-gradient'>{userdata.password}</td>
                            </tr>
                            <tr>

                                <td className='text-center' colSpan="2">
                                    <MDBBtn onClick={handleback} className='text-light mx-1 bg-danger bg-gradient' rounded size='sm' >Back</MDBBtn>
                                </td>
                            </tr>
                        </>
                    }
                </MDBTableBody>
            </MDBTable >
        </>
    );
}

export default StudentDetail;