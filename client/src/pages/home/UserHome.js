import { useState } from "react";
import "./UserHome.css";
import React from "react";
import Axios from "axios";
import UserCart from "./UserCart/UserCart";

const PAGE_PRODUCTS = "productList";
const PAGE_CART = "cart";

function UserHome() {
  const [productList, setProductList] = useState([]);
  const [cart, setCart] = useState([]);

  const [page, setPage] = useState("PAGE_PRODUCTS");

  const getProduct = () => {
    Axios.get("http://localhost:3001/product").then((response) => {
      //respnse is data from the link
      setProductList(response.data); //resonse.data will keep in employeeList
    });
  };

  const addToCart = (product) => {
    setCart([...cart, { ...product }]);
  };

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const renderProducts = () => (
    <>
      {getProduct()}
      {productList.map((product, key) => {
        var name = product.product_name;
        var description = product.product_description;
        var price = product.product_price;
        
        return (
          <div className="employee card" key={key}>
            <div className="card-body text-left">
              <img
                className="img"
                src="https://th.bing.com/th/id/Rb6ae0bf9a0d1fec043e533a074027fd4?rik=5AaJUVAnjcoSEQ&pid=ImgRaw"
                alt="coffee"
              />
              <p className="card-text">Product: {product.product_name}</p>
              <p className="card-text">
                Description: {product.product_description}
              </p>
              <p className="card-text">Price: {product.product_price}</p>
              <p className="card-text">Amount: {product.product_amount}</p>
              <p className="card-text">Issue Date: {product.issue_date}</p>
              <p className="card-text">Expire Date: {product.expire_date}</p>
              <button
                className="btn-cart"
                on
                Click={() => (
                  //addToCart()
                  UserCart(name, description, price)
                )}
              >
                
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </>
  );

  const renderCart = () => (
    <>
      <h1>Cart</h1>

      {cart.map((product, key) => {
        return (
          <div className="employee card">
            <div className="card-body text-left">
              <img
                className="img"
                src="https://th.bing.com/th/id/Rb6ae0bf9a0d1fec043e533a074027fd4?rik=5AaJUVAnjcoSEQ&pid=ImgRaw"
                alt="coffee"
              />
              <p className="card-text">Product: {product.product_name}</p>
              <p className="card-text">
                Description: {product.product_description}
              </p>
              <p className="card-text">Price: {product.product_price}</p>
              <p className="card-text">Amount: {product.product_amount}</p>
              <p className="card-text">Issue Date: {product.issue_date}</p>
              <p className="card-text">Expire Date: {product.expire_date}</p>
              {/* <button className="add-cart" 
                                on Click={() => addToCart(product)}> Add to Cart </button>  */}
            </div>
          </div>
        );
      })}
    </>
  );
  return (
    <div className="userHome">
      <header>
        <div className="btn">
          <button className="btn-cart" onCLick={() => navigateTo("PAGE_CART")}>
            Go to Cart({cart.length})
          </button>

          <button
            className="btn-cart"
            onClick={() => navigateTo("PAGE_PRODUCTS")}
          >
            View Products
          </button>
        </div>
      </header>
      {page === "PAGE_PRODUCTS" && renderProducts()}
      {/*page === 'PAGE_CART' && renderCart()*/}
    </div>
  );
}

export default UserHome;
