import { Outlet } from "react-router-dom"

const AdminLayout = (props)=>{
    return(
        <>
            <h1>Admin Navbar</h1>
            {props.children}
            <h1>Admin Footer</h1>
        </>
    )
}
export default AdminLayout