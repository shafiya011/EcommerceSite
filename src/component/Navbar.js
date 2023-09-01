import  React from "react";
import { Outlet,Link } from "react-router-dom";
// import { NavButton } from "./stylings";


// import "./blog.css"
const Navbar = ({itemCount}) => {
    return ( 
        <nav>
        <div className="Navbardiv">
            <h2>PRODUCTS</h2>
            <div className="links">
                <Link to="/home">Home</Link> 
                <Link to="/products">New products</Link>
                <Link to="/DummyForm">Reviews</Link>
                <Link to="/owners">Owners</Link>
                <Link to="/cart">cart <button style={{borderRadius:"60px",padding:"2px",borderColor:"pink"}}value={itemCount}>{itemCount}</button></Link>
            </div>
            <Outlet/>
        </div>
        </nav>
        
     );
}
 
export default Navbar;