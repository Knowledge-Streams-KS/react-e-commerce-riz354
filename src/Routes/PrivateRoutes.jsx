import { Navigate } from "react-router-dom";

const PrivateRoutes =(props)=>{
   const isLoggedIn = false;
    return (
        <div>
            {isLoggedIn ? (
            <>{props.children}</>):
            (
            <>
            <Navigate to={"/products"} />  </>)}
           
        </div>
       
    )
}
export default PrivateRoutes;