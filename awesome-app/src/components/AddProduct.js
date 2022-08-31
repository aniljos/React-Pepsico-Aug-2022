import { useRef, useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function AddProduct(){


    const [errorMessage, setErrorMessage] = useState("");

    const idRef = useRef(null);
    const nameRef = useRef(null);
    const descRef = useRef(null);
    const priceRef =useRef(null);

    const navigate = useNavigate();
    

    async function save(){

        const id = Number(idRef.current.value);
        const name = nameRef.current.value;
        const description = descRef.current.value;
        const price = Number(priceRef.current.value);

        if(id && name && price){

            const product = {id, name, price, description};
            console.log("Saving", product);

            try{

                const url = "https://aj-mock-rest-api.herokuapp.com/products";
                await axios.post(url, product);
                alert("Saved the product");

                //Navigate to the /products route
                navigate("/products");
            }
            catch(error){
                //alert("Failed to save");
                //errorMessage = "Failed To Save"
                setErrorMessage("Failed To Save");
            }


        }
        else{
            //alert("Please enter all the values");
            //errorMessage = "Please enter all the values"
            setErrorMessage("Please enter all the values");
        }
    }

    return (
        <div>
            <h3>Add New Product</h3>

            {errorMessage ? <div className="alert alert-danger">
                {errorMessage}
            </div> : null}
            

            <div className="form-group">
                <label>ID</label>
                <input className="form-control" placeholder="ID" ref={idRef}/>
            </div>
            <br/>
            <div className="form-group">
                <label>Name</label>
                <input className="form-control" placeholder="Name" ref={nameRef}/>
            </div>
            <br/>
            <div className="form-group">
                <label>Description</label>
                <input className="form-control" placeholder="Description" ref={descRef}/>
            </div>
            <br/>
            <div className="form-group">
                <label>Price</label>
                <input className="form-control" placeholder="Price" ref={priceRef}/>
            </div>
            <br/>
            <div>
                <button className="btn btn-success" onClick={save}>Save</button>&nbsp;
                <button className="btn btn-warning">Cancel/Back</button>
            </div>
            
        </div>
    )
}

export default AddProduct;