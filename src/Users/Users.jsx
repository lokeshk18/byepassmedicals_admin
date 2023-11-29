import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./Users.css"

const Users = () => {
    const [user , setUser] = useState([])
    useEffect(()=>{
            axios
            .get(`http://localhost:4000/getusers`)
            .then(res=>{  
                console.log(res.data)
                setUser(res.data)
                console.log(user) 
            }) 
    },[]);
    
    return (
    <div className='container user'>
        <h3 className='text-center my-4'>USERS</h3>
        <table class="table">
            <thead class="head">
                <tr>
                <th scope="col">S.No</th>
                <th scope="col">Name</th>
                <th scope="col">Mail</th>
                <th scope="col">Address</th>
                </tr>
            </thead>

            <tbody>
            {user.map((ele,i)=>
                <tr>
                <th scope="row">{i+1}</th>
                <td>{ele.username}</td>
                <td>{ele.email}</td>
                <td>{ele.address}</td>
                </tr>
            )}
            </tbody>
        </table>
    </div>
  )
}

export default Users