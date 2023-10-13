import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import {
    MDBContainer,
    MDBInput,
    // MDBCheckbox,
    // MDBBtn,
    // MDBIcon
}
    from 'mdb-react-ui-kit';


const UserEdit = () => {
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { userid } = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        fetch("http://localhost:5000/students/" + userid).then((result) => {
            return result.json().then((resp) => {
                console.log(resp);
                setId(resp.id)
                setName(resp.name)
                setEmail(resp.email)
                setPassword(resp.password)
            }).catch((error) => {
                console.log(error.msg);
            })
        })
    }, [])

    const handelsubmit = (e) => {
        e.preventDefault();
        const data = { id, name, email, password }
        // console.log(data);

        fetch("http://localhost:5000/students/"+userid, {
            method: "PUT",
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
        <div>
            <h1>EDIT</h1>
            <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

                {/* <form onSubmit={handelsubmit}> */}
                <MDBInput wrapperClass='mb-4' value={id} onChange={(e) => setId(e.target.value)} disabled label='ID' id='form1' type='text' />
                <MDBInput wrapperClass='mb-4' value={name} onChange={(e) => setName(e.target.value)} label='NAME' id='form2' type='text' />
                <MDBInput wrapperClass='mb-4' value={email} onChange={(e) => setEmail(e.target.value)} label='EMAIL' id='form3' type='email' />
                <MDBInput wrapperClass='mb-4' value={password} onChange={(e) => setPassword(e.target.value)} label='PASSWORD' id='form4' type='password' />
                <input type="submit" value="Edit" onClick={handelsubmit} />
                {/* </form> */}

            </MDBContainer>

        </div>
    )
}

export default UserEdit
