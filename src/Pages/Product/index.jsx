// Throg axios m
import React from "react"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import ProductCard from "../../components/ProductCard"
import { useParams } from "react-router-dom"


const Products = () => {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState("");
  const {categoryName} = useParams();
  const fetchData = async () => {
    if(categoryName){
    try {
      const respnse = await axios.get(`https://fakestoreapi.com/products/category/${categoryName}`);
      setProducts(respnse.data)

    } catch (error) {
      console.log("Error is", error)
    }
   
  }else{
    try {
      const respnse = await axios. get("https://fakestoreapi.com/products");
      setProducts(respnse.data)

    } catch (error) {
      console.log("Error is", error)
    }
  }
}

  // const fetchData = () => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((resp) => resp.json()) // Convert response to JSON
  //     .then((data) => setProducts(data)) // Set products state with data
  //     .catch((err) => console.log("The error is ", err));
  // };


  useEffect(() => {
    fetchData();
  }, [])

  const handleSearch = (event) => {
    setSearch(event.target.value)

  }
  const filterData = products.filter((card) => {
    return card.title.toLowerCase().includes(search.toLowerCase())
  })



  return (
    <>
      <input type="text" onChange={handleSearch} />
      <h1>Search Products</h1>

      <div style={{display:"flex" , flexWrap:"wrap",margin:""}}>
        {
          filterData.length > 0 ? (filterData.sort((a, b) => a.price - b.price)
            .map((element) => {
              return <ProductCard key={element.id} card={element} />;
            })
          ) : (
            <p>No Such products </p>
          )
        }
      </div>



    </>
  )
}

export default Products

