import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UserDetail = () => {
    const { userid } = useParams()
    const [userdata, setUserData] = useState({})


    useEffect(() => {
        fetch("http://localhost:5000/students/" + userid).then((result) => {
            return result.json().then((resp) => {
                console.log(resp);
                setUserData(resp)
            }).catch((error) => {
                console.log(error.msg);
            })
        })
    }, [])
    return (
        <div>
            <h1>User Detail</h1>

            {/* <tr>
                <td>{userdata.id}</td>
            </tr>
            <tr>
                <td>{userdata.name}</td>
            </tr>
            <tr>
                <td>{userdata.email}</td>
            </tr>
            <tr>
                <td>{userdata.password}</td>
            </tr> */}
            <div>
                {
                    userdata &&
                    <>
                        <h1>user name = {userdata.name}</h1>
                        <h1>user email = {userdata.email}</h1>
                        <h1>user password  = {userdata.password}</h1>
                    </>
                }
            </div>
        </div>
    )
}

export default UserDetail
