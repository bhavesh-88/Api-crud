import React, { useState } from 'react';
import { useEffect } from 'react';
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    // MDBIcon
}
    from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    useEffect(() => {
        sessionStorage.clear()
    },[])
    

    const login = () => {
        console.log("login");
        fetch("http://localhost:5000/students?name=" + user).then((result) => {
            // console.log(result);
            result.json().then((resp) => {
                console.log(resp);
                if (resp[0]) {
                    sessionStorage.setItem('name', user)
                    sessionStorage.setItem('role', resp[0].role)
                    if (resp[0].role === 1) {
                        navigate("/admin")
                    } else {
                        navigate("/")
                    }
                } else {
                    alert("invalid user")
                }
            })
        })
    }
    return (
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">


            <MDBInput value={user} onChange={(e) => setUser(e.target.value)} wrapperClass='mb-4' label='user name' id='form1' type='text' />
            <MDBInput value={password} onChange={(e) => setPassword(e.target.value)} wrapperClass='mb-4' label='Password' id='form2' type='password' />

            <div className="d-flex justify-content-between mx-3 mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                <a href="!#">Forgot password?</a>
            </div>

            <MDBBtn className="mb-4" onClick={login}>login</MDBBtn>

            <div className="text-center">
                <p>Not a member?
                    <Link to="/register"> Register</Link>
                </p>
            </div>

        </MDBContainer>
    );
}

export default Login;