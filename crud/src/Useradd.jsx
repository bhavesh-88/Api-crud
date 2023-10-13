import React, { useState } from 'react';
import {
    MDBContainer,
    MDBInput,
    // MDBCheckbox,
    // MDBBtn,
    // MDBIcon
}
    from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

function Useradd() {
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handelsubmit = (e) => {
        e.preventDefault();
        console.log();
        const data = { id, name, email, password }
        // console.log(data);

        fetch("http://localhost:5000/students", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((result) => {
            return result.json().then((resp) => {
                console.log(resp);
                navigate("/")
            });
        })
    }
    return (
        <>
        <h2>ADD User</h2>
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

            {/* <form onSubmit={handelsubmit}> */}
                <MDBInput wrapperClass='mb-4' value={id} onChange={(e) => setId(e.target.value)} disabled label='ID' id='form1' type='text' />
                <MDBInput wrapperClass='mb-4' value={name} onChange={(e) => setName(e.target.value)} label='NAME' id='form2' type='text' />
                <MDBInput wrapperClass='mb-4' value={email} onChange={(e) => setEmail(e.target.value)} label='EMAIL' id='form3' type='email' />
                <MDBInput wrapperClass='mb-4' value={password} onChange={(e) => setPassword(e.target.value)} label='PASSWORD' id='form4' type='password' />
                <input type="submit" value="addUser" onClick={handelsubmit} />
            {/* </form> */}

        </MDBContainer>
        </>
    );
}

export default Useradd; 