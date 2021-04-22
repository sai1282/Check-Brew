import React from "react";
import "./admin_navBar.css";
import { GiCoffeeCup } from "react-icons/gi";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";

function admin_navBar() {

  
  return (
    <div className="navbar">
      <div className="header_logo">
        <GiCoffeeCup style={{ fontSize: "60px" }} />
        <h1 style={{ padding: "0", margin: "0" }}>CHECK BREW</h1>
        <h5 style={{ padding: "0", margin: "0" }}>COLD BREW COFFEE</h5>
      </div>

      <div className="menu_list">
        <Link to="/overView">
          <button className="menu_btn">Overview</button>
        </Link>
        <Link to="/products">
          <button className="menu_btn">Products</button>
        </Link>
        <Link to="/order">
          <button className="menu_btn">Order</button>
        </Link>
        <Link to="/customerList">
          <button className="menu_btn">CustomerList</button>
        </Link>
        <Link to="/stock">
          <button className="menu_btn">Stock</button>
        </Link>
      </div>
      <div className="logout">
        <BiLogOut className="btn_logout" />
        <span>Logout</span>
      </div>
    </div>
  );
}

export default admin_navBar;
