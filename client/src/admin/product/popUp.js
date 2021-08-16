import React from 'react'
import TextField from '@material-ui/core/TextField';
import './popUp.css';
import {RiCloseCircleFill} from 'react-icons/ri';
import { useState } from 'react';
import Axios from 'axios';

function PopUp(props) {

    const [file, setFile] = React.useState("");

/**
 * Component to handle file upload. Works for image
 * uploads, but can be edited to work for any file.
 */

 
 function FileUpload() {

    // State to store uploaded file
    
  
    // Handles file upload event and updates state
    function handleUpload(event) {
      setFile(event.target.files[0]);
  
      // Add code here to upload file to server
      // ...
    }
    return (
        <div className="upload-box">
            <input type="file" onChange={handleUpload}/>

        </div>
    )
    
  
}

  /**
 * Component to display thumbnail of image.
 */
 const ImageThumb = ({ image }) => {
    return <img src={URL.createObjectURL(image)} alt={image.name} className="img"/>;
  };
  

/*     const [productName, setproductName] = useState("");
    const [productDescription, setproductDescription] = useStte("");
    const [productPrice, setproductPrice] = useState("");
    const [productImage, setproducImage] = useState("");
    const [productAmount, setproductAmount] = useState("");
    const [issueDate, setissueDate] = useState("");
    const [expireDate, setexpireDate] = useState(""); */

    //trigger will receive true or false value
    return (props.trigger)? (
        //if it true
        <div className="popUp">            
            <div className="popup-inner">
                <div className="img-content">
                    <p className="img-outline">{file && <ImageThumb image={file}/>}</p>
                    <FileUpload className="btn btn-success"/>
                </div>
                <div className="left_texField">
                <TextField id="outlined-basic" label="Product name" variant="outlined" />
                <TextField id="outlined-basic" label="Product price" variant="outlined" />
                </div>
                <div className="right_txtField">
                <TextField id="outlined-basic" label="Product amount" variant="outlined" />   
                <TextField id="outlined-basic" label="Expire date" variant="outlined" />
                <button className="add-btn">Add Product</button>
                </div>
                <RiCloseCircleFill className="close-btn" onClick={() => props.setTrigger(false)}/>
            </div>
    
                
            {props.children }
        </div>
    //if is false
    ): ""; //return nothing
}

export default PopUp

