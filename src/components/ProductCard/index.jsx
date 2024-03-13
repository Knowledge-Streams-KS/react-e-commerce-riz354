import "./index.css"
const ProductCard = (props) => {
    return (
        <>
            <div className="container">
                <div className="Card">
                    <h1>Title : {props.card.title}</h1>
                    <h6>Price : {props.card.price}</h6>
                    <p>Description : {props.card.description}</p>
                    <img src={props.card.image} alt={props.card.title} className="image" />

                </div>
            </div>
        </>
    )
}

export default ProductCard