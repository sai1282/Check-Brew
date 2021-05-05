import { useState } from 'react';
import './UserHome.css';
import React from 'react';
import Axios from 'axios';
import UserCart from './UserCart/UserCart';

function UserHome() {
    const [productList, setProductList] = useState( [] );

    const getProduct = () => {
        Axios.get('http://localhost:3001/product').then((response) => { //respnse is data from the link
            setProductList(response.data); //resonse.data will keep in employeeList
        });
    }
    return (
        <div className='userHome'>
            {getProduct()}
            {productList.map((val, key) => {
                return(
                    <div className="employee card"> 
                        <div className="card-body text-left">
                            <img className="img" src="https://th.bing.com/th/id/Rb6ae0bf9a0d1fec043e533a074027fd4?rik=5AaJUVAnjcoSEQ&pid=ImgRaw" alt="coffee"/>
                            <p className="card-text">Product: {val.product_name}</p>
                            <p className="card-text">Description: {val.product_description}</p>
                            <p className="card-text">Price: {val.product_price}</p>
                            <p className="card-text">Amount: {val.product_amount}</p>
                            <p className="card-text">Issue Date: {val.issue_date}</p>
                            <p className="card-text">Expire Date: {val.expire_date}</p>
                            <button className="add-cart" > Add to Cart </button>
                        </div>
                    </div>
                )
            })}
            
        </div>
    );
}

export default UserHome;
