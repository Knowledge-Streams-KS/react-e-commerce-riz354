import { useNavigate } from "react-router-dom"
import "./index.css"
const ProductCard = (props) => {
    const productDetail=useNavigate()

    return (
        <>
            <div className="container">
                <div className="Card">
                    <h1>Title : {props.card.title}</h1>
                    <h6>Price : {props.card.price}</h6>
                    {/* <p>Description : {props.card.description}</p> */}
                    <img src={props.card.image} alt={props.card.title} className="image" />
                    <button onClick={()=>productDetail(`/product-Detail/${props.card.id}`)}>Show detail</button>

                </div>
            </div>
        </>
    )
}

export default ProductCard