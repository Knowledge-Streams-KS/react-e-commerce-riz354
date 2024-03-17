 import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useRouteLoaderData } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
const ProductDetail = () => {
    const mydata = useLoaderData();
    const product = mydata.data;
    // const [product, setProduct] = useState([])
    // const { productId } = useParams();
    // const fetchData = async () => {
    //     const resp = await axios.get(`https://fakestoreapi.com/products/${productId}`)
    //     setProduct(resp.data)
    //     console.log(resp)
    // }
    // useEffect(() => {
    //     fetchData()
    // }, [])

    return (
        <>
            {product ? (
                <div>
                    <h1>Title: {product.title}</h1>
                    <h2>Price: {product.price}</h2>
                    <h2>Description: {product.description}</h2>
                    <img src={product.image} alt="" />
                </div>
            ) : (

                <h1>No such Products found</h1>

            )}
        </>
    )
}

export default ProductDetail;

export const productDetailLoader = ({ params }) => {
    return axios.get(`https://fakestoreapi.com/products/${params.productId}`)
}

