import { React } from "react";
import { FcPlus } from "react-icons/fc";
import "./products.css";
import Popup from "./PopUp";
import Axios from "axios";
import { useState } from "react";

function Products() {
  const [productList, setProductList] = useState([]);

  const getProduct = () => {
    Axios.get("http://localhost:3001/product").then((response) => {
      // response data from the line
      setProductList(response.data); // response data will keep in productList
    });
  };


  return (
    <div className="home">
      <h1>Product list</h1>
      <FcPlus className="btn_addProduct" />
      {getProduct()}
      {productList.map((val, key) => {
        return (
          
          <div className="home_container">
          <div className="home_row">
          <div class="product">
          <div className="product_info">
            <p>Product: {val.product_name}</p>
            <p>Description: {val.product_description}</p>
            <p className="product_price"><small>$</small> <strong>{val.product_price}</strong></p>
            {/* <p>Amount: {val.product_amount}</p>
            <p>Issue Date: {val.issue_date}</p>
            <p>Expire Date: {val.expire_date}</p> */}
            <img className="img" src='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg' alt="coffee"/>
          </div>
          <button className="button">Add to Basket</button>
        </div>
        </div>
        </div>
        
        )
      })}

      <Popup trigger={true}></Popup>
    </div>
  );
}

export default Products;
