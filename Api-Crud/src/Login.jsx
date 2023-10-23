import React, { useEffect, useState } from 'react';
import {
    MDBContainer, MDBInput, MDBBtn, MDBCardBody
}
    from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()
    // const img = "https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"

    useEffect(() => {
        sessionStorage.clear()
    }, [])


    const signin = () => {
        fetch(`http://localhost:5000/students?email=${email}&password=${password}`).then((result) => {
            return result.json().then((resp) => {
                console.log(resp);
                if (resp[0]) {
                    sessionStorage.setItem("role", resp[0].role)
                    if (resp[0].role === "admin") {
                        navigate("/studentdata")
                    }
                    else {
                        navigate("/home")
                    }
                }
                else {
                    alert("Invalid Email or Password")
                }
            })
        })
    }
    const handleback = () => {
        navigate("/home")
    }
    return (
        <>
            {/* <div style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}> */}

            <MDBContainer className="p-3 my-5 d-flex flex-column w-50" >
                <MDBCardBody className='p-5 shadow-5 text-center'>

                    <MDBInput value={email} onChange={(e) => setEmail(e.target.value)} wrapperClass='mb-4' label='Email address' id='form1' type='email' />
                    <MDBInput value={password} onChange={(e) => setPassword(e.target.value)} wrapperClass='mb-4' label='Password' id='form2' type='password' />

                    {/* <div className="d-flex justify-content-between mx-3 mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>            </div> */}

                    <MDBBtn className="my-4 mx-2" onClick={signin}>Sign in</MDBBtn>
                    <MDBBtn className='my-4 mx-2' onClick={handleback} >Back</MDBBtn>

                    <div className="text-center">
                        <p>Not a member?<Link to="/createuser">Register</Link></p>
                    </div>
                </MDBCardBody>

            </MDBContainer >
            {/* </div> */}
        </>

    );
}

export default Login;