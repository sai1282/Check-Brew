import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { GiCoffeeCup } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { BiLogIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bar">
            <FaBars onClick={showSidebar} className="burgerIcon" />
          </Link>
          <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="header_logo">
            <GiCoffeeCup style={{ fontSize: "60px" }} />
            <h1 style={{ padding: "0", margin: "0" }}>CHECK BREW</h1>
            <h5 style={{ padding: "0", margin: "0" }}>COLD BREW COFFEE</h5>
          </div>
          </Link>
          <div className="header_optionBasket">
            <Link to="/UserCart">
              <ShoppingBasketIcon className="basket" style={{ color: "white" }} />
            </Link>
          </div>
        </div>

        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="meun-bars">
                <AiOutlineClose className="closeIcon" />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
