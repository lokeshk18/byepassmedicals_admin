import React from 'react'
import './Product.scss'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Product = () => {
    const [name,setName]=useState("")
    const [category,setCategory]=useState("")
    const [mrp,setMrp]=useState("");
    const [price,setPrice]=useState("");
    const [use,setUse]=useState("")
    const [sideef,setSideef]=useState("")
    const [precaution,setPrecaution]=useState("")
    const [directions,setDirections]=useState("")
    const [storage,setStorage]=useState("")
    const [dosage,setDosage]=useState("")

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState("")
    const [imageurl ,setImageurl] = useState('')
    
    const uploadImage = async e => {
      const files = e.target.files
      const data = new FormData()
      data.append('file', files[0])
      data.append('upload_preset', 'byepass')
      setLoading(true)
      const res = await fetch("https://api.cloudinary.com/v1_1/djylwtcvn/image/upload",
          {
              method: 'POST',
              body: data
          })

      const file = await res.json()
      console.log(file)
      console.log(file.url)
      setImageurl(file.url)
      setImage(file.secure_url)
      setLoading(false)
  }

  async function post(e) {
    e.preventDefault()
    const inputs = {
        name,
        category,
        mrp,
        price,
        use,
        sideef,
        precaution,
        directions,
        storage,
        dosage,
        imageurl
    };
    await axios
      .post("http://localhost:4000/newproduct", inputs)
      .then(()=>{
          console.log("Created");
          navigate("/");
      }).catch (
        console.log(Error)
      )
    }

  return (
        <div className="add-product-container ">
        <div className="row">
            <div className="col-12 ">
                <div className="card shadow mb-3">
                    <div className="card-body">
                    <p className="heading text-center">Add New Product</p>
     <form action="">
        <div>
      <label htmlFor="">Name:</label>
      <input type="text"  className="form-control" value={name} onChange={e => setName(e.target.value)}  />
      </div>
     
      <div>
      <label htmlFor="">Category:</label>
      <input type="text"  className="form-control" value={category} onChange={e => setCategory(e.target.value)} />
      </div>
     
      <div>
      <label htmlFor="">MRP:</label>
      <input type="text"  className="form-control" value={mrp} onChange={e => setMrp(e.target.value)} />
      </div>
      
      <div>
      <label htmlFor="">Price:</label>
      <input type="text"  className="form-control" value={price} onChange={e => setPrice(e.target.value)}  />
      </div>
     
      <div>
      <label htmlFor="">Use:</label>
      <input type="text"  className="form-control" value={use} onChange={e => setUse(e.target.value)}  />
      </div>
     
      <div>
      <label htmlFor="">Side Effects:</label>
      <input type="text"  className="form-control" value={sideef} onChange={e => setSideef(e.target.value)}  />
      </div> 
      <div>
      <label htmlFor="">Precaution:</label>
      <input type="text"  className="form-control" value={precaution} onChange={e => setPrecaution(e.target.value)}  />
      </div>
     
      <div>
      <label htmlFor="">Direction:</label>
      <input type="text"  className="form-control"  value={directions} onChange={e => setDirections(e.target.value)}  />
      </div>
    
      <div>
      <label htmlFor="">Storage:</label>
      <input type="text"  className="form-control" value={storage} onChange={e => setStorage(e.target.value)}  />
      </div>
     
      <div>
      <label htmlFor="">Dosage:</label>
      <input type="text"  className="form-control" value={dosage} onChange={e => setDosage(e.target.value)}  />
      </div>
     
      <div>
      <label className="form-label" for="cmpimg">Upload Image</label>
      <input className="form-control" type="file" onChange={uploadImage} id="cmpimg" name="cmpimg" multiple required />
        {
        loading ? (
          <h5>Loading..</h5>
        ) : (
          <img src={image} style={{ width: '300px' }} alt=".." />
        )
        }
      </div>
      <button type='submit' className="btn btn-primary" onClick={post}>Create</button>
     </form>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Product