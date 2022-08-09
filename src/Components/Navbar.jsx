import React from "react";
import { Link } from "react-router-dom";
import './style.css'

const Navbar=()=>{
    const style={
        textDecoration:'none',
        color:"white",
        margin:'10px',
        padding:"8px",
        cursor:'pointer',
        background:"blue",
        borderRadius:"8px"
    }
    return(
        <div id="navbar">
            <Link to="/" style={style}>Home</Link>
            <Link to="/add-city"  style={style}>Add new city</Link>
            <Link to="/add-country"  style={style}>Add new country</Link>
        </div>
    )
}
export default Navbar;