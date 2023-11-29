import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./Orders.css"

const Orders = () => {
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
    <div className='container order'>
        <h3 className='text-center my-4'>ORDERS</h3>
        <table class="table">
            <thead class="head">
                <tr>
                <th scope="col">S.No</th>
                <th scope="col">Username</th>
                <th scope="col">Product Name</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Lokesh</td>
                <td>Horlicks</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Harini</td>
                <td>Head & Shoulders</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Anusuya</td>
                <td>Olive Oil</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Orders