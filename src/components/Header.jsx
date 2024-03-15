import { NavLink } from "react-router-dom"
const Header =()=>{
    return(
        <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="contact/:contactid">Contact us</NavLink>
        <NavLink to="/products">Products</NavLink>
        
        </>
    )
}

export default Header