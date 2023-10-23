import React, { useEffect, useState } from 'react';
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBInput, MDBRow, MDBCol, MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
// import "./api.css"
import { useNavigate, useParams } from 'react-router-dom';


export default function StudentEdit() {
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("")
    const navigate = useNavigate()
    const { studentid } = useParams()


    useEffect(() => {

        fetch("http://localhost:5000/students/" + studentid).then((result) => {
            return result.json().then((resp) => {
                setId(resp.id)
                setName(resp.name)
                setEmail(resp.email)
                setPassword(resp.password)
                setRole(resp.role)
            })
        })
    }, [studentid])

    const handleedit = () => {
        const data = { id, name, email, password, role }
        if (name === "" || email === "" || password === "" || role === "") {
            alert("Please fill blank input")
        }
        else {
            fetch("http://localhost:5000/students/" + studentid, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then((result) => {
                result.json().then((resp) => {
                    navigate("/studentdata")
                })
            })
        }
    }

    const handleback = () => {
        navigate("/studentdata")
    }
    // console.log(id);
    return (
        <>
            <MDBContainer fluid className='my-5'>
                <MDBRow className='g-0 align-items-center'>
                    <MDBCol col='6'>

                        <MDBCard className='my-5 cascading-right' style={{ background: 'hsla(0, 0%, 100%, 0.55)', backdropFilter: 'blur(30px)' }}>
                            <MDBCardBody className='p-5 shadow-5 text-center'>

                                <h2 className="fw-bold mb-5">Create User now</h2>
                                <MDBInput value={id} onChange={(e) => setId(e.target.value)} wrapperClass='mb-4' disabled label='Id' id='form1' type='text' />
                                <MDBInput value={name} onChange={(e) => setName(e.target.value)} wrapperClass='mb-4' label='Name' id='form2' type='text' />
                                <MDBInput value={email} onChange={(e) => setEmail(e.target.value)} wrapperClass='mb-4' label='Email' id='form3' type='email' />
                                <MDBInput value={password} onChange={(e) => setPassword(e.target.value)} wrapperClass='mb-4' label='Password' id='form4' type='password' />
                                {/* <MDBInput value={role} onChange={(e) => setRole(e.target.value)} wrapperClass='mb-4' label='Role' id='form5' type='text' />
                                <MDBDropdown>
                                    <MDBDropdownToggle>Select role</MDBDropdownToggle>
                                    <MDBDropdownMenu value={role} onChange={(e) => setPassword(e.target.select)}>
                                    <MDBDropdownItem link>admin</MDBDropdownItem>
                                    <MDBDropdownItem link>user</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown> */}
                                <MDBCardBody className='text-center'>
                                    <p>Please Select role</p>
                                    <select className='px-5' value={role} onChange={(e) => setRole(e.target.value)}>
                                        <option value="admin">admin</option>
                                        <option value="user">user</option>
                                    </select>

                                </MDBCardBody>
                                <MDBBtn className=' my-4 mx-2' onClick={handleedit}>Edit User</MDBBtn>
                                <MDBBtn className=' my-4 mx-2' onClick={handleback} >Back</MDBBtn>

                            </MDBCardBody>
                        </MDBCard>

                    </MDBCol>


                    <MDBCol col='6'>
                        <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/005.jpg" class=" rounded-4 shadow-4"
                            alt="" fluid />
                    </MDBCol>

                </MDBRow>
            </MDBContainer>
        </>
    );
}