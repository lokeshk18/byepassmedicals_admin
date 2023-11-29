import React from "react";
import './Show.css';
import { Link,useParams } from "react-router-dom";
import axios from "axios";
import { useEffect,useState } from "react";

const Show = () => {
    const params = useParams();
    const [pdt , setPdt] = useState([])
    useEffect(()=>{
            axios
            .get(`http://localhost:4000/allproducts`)
            .then(res=>{  
                console.log(res.data)
                setPdt(res.data) 
            }) 
    },[]);

  return (
    <div className="prod">
        <br />
    <h2 style={{textAlign:"center"}}>Products</h2> <br />
    <div className="container">
    <h4 className="heading"> {params.id} </h4>
        <div className="row  products">
            {pdt.map((ele)=>
            <div className="col-4 product">
                <div className="image">
                    <img src={ele.imageurl} alt=""/>
                </div>
                <div>
                    <p> {ele.name}</p>
                </div>
                <div className="namePrice">
                    <h6 style={{color:"gray"}}>MRP - <del>₹{ele.mrp}</del> </h6>
                    
                </div>
                <div className="namePrice">
                    <h6 style={{color:"gray"}}>Price -₹{ele.price} </h6>
                    
                </div>
                <div className="bay">
                    <Link to="/view" state={ele}><button> View </button></Link>
                </div>
            </div>
        )}
        </div>

    </div>
</div>
  )
}
export default Show