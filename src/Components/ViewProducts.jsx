import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

function ViewProducts() {

    let[products,setProducts] = useState([]);
    let navigate = useNavigate();

    function getAllProducts() {
        // axios.get("http://localhost:3000/products")
        axios.get("http://localhost:9090/getAllProducts")
        .then((res)=> setProducts(res.data))
        .catch((erros)=> console.log(errors))
    }

    useEffect(()=>{
        getAllProducts()
    },[]);

    function onDelete(id) {
        if(confirm("Do you want to delete record? : " +id)) {
            // axios.delete("http://localhost:3000/products/"+id)
            axios.delete("http://localhost:9090/deleteById/"+id)
            .catch((errors)=>console.log(errors));
            getAllProducts();
        }
    }

    function onEdit(id) {
        if(confirm("Do you want to update record? : " +id)) {
            navigate('/update/'+id);
        }
    }

  return (
    <div>
        <h1>ViewProducts</h1>

        <table border={1} className="table table-hover table-bordered mt-5"> 
            <thead>
                <tr>
                    <th>PNAME</th>
                    <th>PRICE</th>
                    <th>COLOR</th>
                    <th>BRAND</th>
                    <th>Category</th>
                    <th>Seller</th>
                    <th colSpan="2">ACTION</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((pr,i)=><tr key={i}>
                        <td>{pr.pname}</td>
                        <td>{pr.price}</td>
                        <td>{pr.color}</td>
                        <td>{pr.brand}</td>
                        <th>{pr.category}</th>
                        <th>{pr.seller}</th>
                        <td><button className="btn btn-info" onClick={()=>onDelete(pr.pid)}>DELETE</button></td>
                        <td><button className="btn btn-success" onClick={()=>onEdit(pr.pid)}>UPDATE</button></td>
                    </tr>)
                }
            </tbody>
        </table>
    </div>
  )
}

export default ViewProducts