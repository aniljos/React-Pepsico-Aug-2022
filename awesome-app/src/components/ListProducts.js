
import {useEffect, useState} from 'react';
import axios from 'axios';
import './ListProducts.css';
import {Link} from 'react-router-dom';


function ListProducts(){

    const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log("useEffect called on component mount");
        fetchProducts();
    }, []);

    async function fetchProducts(){

        try{
            const url = "https://aj-mock-rest-api.herokuapp.com/products";
            const response = await axios.get(url);
            console.log("fetchProducts", response);
            setProducts(response.data);
        }
        catch(error){

            console.log("fetchProducts", error);
        }
    }


    return (
        <div>
            <h3>List Products</h3>
            
            <div>
                <Link className='btn btn-info' to="/addProduct">New Product</Link>
            </div>
            <div className='productContainer'>
                {products.map((product, index) => {

                    return (
                        <div className='product'>
                            <p>Id: {product.id}</p>
                            <p>Name: {product.name}</p>
                            <p>Decription: {product.description}</p>
                            <p>Price: {product.price}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ListProducts;