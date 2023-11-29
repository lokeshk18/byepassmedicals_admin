import React, { useState,useEffect } from "react"
import axios from "axios";
import "./ViewProduct.scss"
import { useLocation, useNavigate } from "react-router-dom";

function ViewProduct() {

    const location = useLocation();
    const pdt=location.state;
    const productId = pdt._id;
    const userId = localStorage.getItem("userId")
    const navigate = useNavigate();
    const [quantity,setQuantity] = useState("1");

  async function deletepdt(e) {
    e.preventDefault()
    
    await axios.post(`http://localhost:4000/removeproduct/${productId}`,userId)
        .then(
                navigate("/show")
        ).catch(
          console.log(Error)
        ) 
    }

    return (
    
    <section className="view">
         {/* <Navbar/> */}
    <div className="App p-5">
    <>
    <div className="container">
    <div className="row">
    <div className="col p-2">
      <img src={pdt.imageurl}></img>
    </div>
  
    <div className="col p-2">
    <h3>{pdt.name}</h3>
    <h4>₹{pdt.price}</h4><h6>MRP<del>₹{pdt.mrp}</del></h6>
    <div className="offer">50% OFF</div>
    <h6>Delivery by <b>Tomorrow, 9:00 am - 3:00 pm</b></h6>
    <div className="my-2">
    <span style={{color:"#8897a2"}}>Quantity 
    <select name="quantity" onChange={(e)=>setQuantity(e.target.value)} style={{marginLeft:"8px"}}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
    </select></span>
    </div>
    {/* <button className="btn btn-outline-secondary" onClick={post} style={{marginRight:"20px"}} type="button" >ADD TO CART</button> */}
    {/* <button className="btn btn-outline-secondary" style={{color:"whitesmoke",backgroundColor:"#8897a2",fontSize:"19px"}} type="button">Order</button> */}
    <button className="btn btn-outline-secondary" onClick={deletepdt} style={{color:"whitesmoke",backgroundColor:"#8897a2",fontSize:"19px"}} type="button">Delete</button>
    </div>
    </div>
</div> <br /><br />
    </>
    <h5><b>Description</b></h5>
{/* <h6>Brand:EVERHERB</h6> */}
  <h6>Expires on or After: 30/12/2023</h6>
  <h6>Country of Origin: India
  </h6><br></br>
  <h5><b>Directions of Usage</b></h5>
  <h6>{pdt.directions}</h6>
  <br></br> 
  <h5><b>Storage:</b></h5>
  <h6> {pdt.storage}</h6> <br />
  <h5><b>Uses:</b></h5>
  <h6> {pdt.use}</h6><br />
  <h5><b>Side Effects:</b></h5>
  <h6> {pdt.sideef}</h6><br /> 
  <h5><b>Precautions:</b></h5>
  <h6> {pdt.precaution}</h6>
</div>
</section>
     );
    }
    
export default ViewProduct;