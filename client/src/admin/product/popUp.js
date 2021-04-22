import React from 'react'
import TextField from '@material-ui/core/TextField';
import './popUp.css';
import {RiCloseCircleFill} from 'react-icons/ri';
import { useState } from 'react';
import Axios from 'axios';

function popUp(props) {

/*     const [productName, setproductName] = useState("");
    const [productDescription, setproductDescription] = useStte("");
    const [productPrice, setproductPrice] = useState("");
    const [productImage, setproducImage] = useState("");
    const [productAmount, setproductAmount] = useState("");
    const [issueDate, setissueDate] = useState("");
    const [expireDate, setexpireDate] = useState(""); */

    
    return (props.trigger)? (
        <div className="popUp">            
{/*             <div className="popup-inner">
                <div className="left_texField">
                <TextField id="outlined-basic" label="Product ID" variant="outlined" />
                <TextField id="outlined-basic" label="Product name" variant="outlined" />
                <TextField id="outlined-basic" label="Product price" variant="outlined" />
                </div>
                <div className="right_txtField">
                <TextField id="outlined-basic" label="Product amount" variant="outlined" />   
                <TextField id="outlined-basic" label="Expire date" variant="outlined" />
                <button className="add-btn">Add Product</button>
                </div>
                <RiCloseCircleFill className="close-btn" />
            </div> */}
                <div className= "popup-inner">
                    <TextField placeholder="Product name"></TextField>
                    <TextField placeholder="Product description"></TextField>
                    <TextField placeholder="Product price"></TextField>
                <div class="form-group">
                    <lable for="name" class="col-sm-3 control-label">File</lable>
                    <div class="col-sm-6">
                        <input type="file" name="text_file" class="fomr-control"/>
                    </div>
                </div>
                    

                    <TextField placeholder="Product amount"></TextField>
                    <TextField placeholder="Issue date"></TextField>
                    <TextField placeholder="Expire date"></TextField>
                    <button className="add-btn">Add Product</button>
                </div>
                <RiCloseCircleFill className="close-btn" />
            {props.children }
        </div>
    ): ""; 
}

export default popUp
