import React from 'react'
import './Button.scss'
import { Link } from 'react-router-dom';
const Button = () => {



  return (
    <div className="container button-container" style={{textAlign:"center"}}>
        <div className="row">
            <div className="col">
                <div className="card shadow mb-3">
                    <div className="card-body">
    <div className='b'>
    <button className="btn btn-md shadow"><Link to="/product" style={{textDecoration:"none",color:"white"}} >ADD</Link> </button>   
    </div> 
    <br />
    <div  className='b'>
    <button className="btn btn-md shadow" ><Link to="/show" style={{textDecoration:"none",color:"white"}} >SHOW</Link></button>
    </div>
    <br />
    {/* <div  className='b'>
    <button className="btn btn-md shadow" ><Link to="/orders" style={{textDecoration:"none",color:"white"}}>GET ORDERS</Link> </button>  
    </div> */}
    <br />
    <div  className='b'>
    <button className="btn btn-md shadow" ><Link to="/users" style={{textDecoration:"none",color:"white"}}>GET USERS</Link> </button>  
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
   
    
  )
}
export default Button