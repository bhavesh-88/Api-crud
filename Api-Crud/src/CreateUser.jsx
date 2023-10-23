import React, { useState } from 'react';
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBInput, MDBRow, MDBCol } from 'mdb-react-ui-kit';
// import "./api.css"
import { useNavigate } from 'react-router-dom';

function Createuser() {
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handlesubmit = (event) => {
        const data = { name, email, password, role: "user" }
        event.preventDefault()
        if (name === "" || email === "" || password === "") {
            alert("Please fill blank input")
        }
        else {
            // console.log("handlesubmit");
            fetch("http://localhost:5000/students", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then((result) => {
                result.json().then((resp) => {
                    alert('Create successfully.')
                    navigate("/login")
                })
            })
        }
    }
    const handleback = () => {
        navigate("/home")
    }
    return (
        <MDBContainer fluid className='my-5'>

            <MDBRow className='g-0 align-items-center'>
                <MDBCol col='6'>

                    <MDBCard className='my-5 cascading-right' style={{ background: 'hsla(0, 0%, 100%, 0.55)', backdropFilter: 'blur(30px)' }}>
                        <MDBCardBody className='p-5 shadow-5 text-center'>

                            <h2 className="fw-bold mb-5">Create User now</h2>

                            <MDBInput autoComplete='off' value={id} onChange={(e) => setId(e.target.value)} wrapperClass='mb-4' disabled label='Id' id='form1' type='text' />
                            <MDBInput autoComplete='off' value={name} onChange={(e) => setName(e.target.value)} wrapperClass='mb-4' label='Name' id='form2' type='text' />
                            <MDBInput autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)} wrapperClass='mb-4' label='Email' id='form3' type='email' />
                            <MDBInput autoComplete='off' value={password} onChange={(e) => setPassword(e.target.value)} wrapperClass='mb-4' label='Password' id='form4' type='password' />

                            <MDBBtn className=' my-4 mx-2' onClick={handlesubmit} >Create User</MDBBtn>
                            <MDBBtn className=' my-4 mx-2' onClick={handleback} >Back</MDBBtn>

                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol col='6'>
                    <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" class=" rounded-4 shadow-4"
                        alt="" fluid />
                </MDBCol>

            </MDBRow>

        </MDBContainer>
    );
}

export default Createuser;