//link, navlink
//menuitems, navbar, react

import { Link, NavLink } from "react-router-dom";

import { MenuItems } from "./MenuItems";

import "./Navbar.css";

import React, { useState } from "react";
//declare navbar

const Navbar = () => 
{    const [clicked, setClicked] = useState(false);
        const handleClick = () => {setClicked(!clicked);};
    return (<nav className="NavbarItems">
 <Link to="/" style={{ textDecoration: "none" }}>
 <h1 className="navbar-logo">Alexis R.</h1>
  </Link>  <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
    </div><ul className={clicked ? "nav-menu active" : "nav-menu"}>
      {MenuItems.map((item, index) => 
      {   return (    <li key={index} onClick={() => setClicked(false)}>
            <NavLink className={item.cName} to={item.url}>
            {item.title}
            </NavLink>   </li>);})}</ul></nav>);};
export default Navbar;
//export navbar
