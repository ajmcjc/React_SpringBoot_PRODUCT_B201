import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom";

function Update() {

  let{register,handleSubmit,setValue} = useForm();
  let {id} = useParams();
  let navigate = useNavigate();

  function getProductById() {
    // axios.get("http://localhost:3000/products/"+id)
    axios.get("http://localhost:9090/getProductById/"+id)
    .then((res) => {
        for(let props in res.data) {
            setValue(props,res.data[props])
        }
    })
  }
  
  function onUpdate(data) {
    alert("Product updated");
    // axios.put("http://localhost:3000/products/"+data.id, data)
    axios.put("http://localhost:9090/updateProductById/"+data.pid,data)
    .catch((errors)=>console.log(errors))
    navigate("/viewproducts");
  }

  useEffect(()=>{
    getProductById()
  },[]);

  return (
     <div className="container mt-5" style={{ maxWidth: "600px" }}>
      <form onSubmit={handleSubmit(onUpdate)}>
        <fieldset className="border p-4 rounded shadow bg-light">
          <legend className="float-none w-auto px-3 text-primary fw-bold">
            Update Product
          </legend>

          {/* Product Name */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Product Name</label>
            <input 
              type="text" 
              className="form-control" 
              {...register("pname")} 
            />
          </div>

          {/* Product Price */}
          <div className="mb-3">    
            <label className="form-label fw-semibold">Product Price</label>        
            <input 
              type="number" 
              className="form-control" 
              {...register("price")} 
            />
          </div>

          {/* Product Color */}
          <div className="mb-3"> 
            <label className="form-label fw-semibold">Product Color</label>          
            <input type="text" className="form-control" {...register("color")} />
          </div>

          {/* Product Brand */}
          <div className="mb-4">
            <label className="form-label fw-semibold">Product Brand</label> 
            <select 
              className="form-select" 
              {...register("brand")}
            >
              <option value="">Select Brand...</option>
              <option value="Samsung">Samsung</option>
              <option value="Apple">Apple</option>
              <option value="Asus">Asus</option>
              <option value="Sony">Sony</option>
              <option value="Titan">Titan</option>
            </select>
          </div>

          {/* Product Category */}
          <div className="mb-4">
            <label className="form-label fw-semibold d-block">Product Category</label>
            {["Electronics", "Laptops", "Home", "Mobiles", "Gadget"].map((cat) => (
              <div className="form-check form-check-inline" key={cat}>
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  id={cat} 
                  value={cat.toLowerCase()} 
                  {...register("category")} 
                />
                <label className="form-check-label" htmlFor={cat}>{cat}</label>
              </div>
            ))}
          </div>

          {/* Select Seller */}
          <div className="mb-4"> 
            <label className="form-label fw-semibold d-block">Select Seller</label>          
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" id="amazon" {...register("seller")} value="amazon" />
              <label className="form-check-label" htmlFor="amazon">Amazon</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" id="flipkart" {...register("seller")} value="flipkart" />
              <label className="form-check-label" htmlFor="flipkart">Flipkart</label>
            </div>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary btn-lg"> UPDATE PRODUCT </button>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default Update