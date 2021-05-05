import React from 'react'
import TextField from '@material-ui/core/TextField';
import './popUp.css';
import {RiCloseCircleFill} from 'react-icons/ri';
import { useState } from 'react';
import Axios from 'axios';

function PopUp(props) {

/**
 * Component to handle file upload. Works for image
 * uploads, but can be edited to work for any file.
 */

 const [file, setFile] = React.useState("");
 function FileUpload() {
    // State to store uploaded file
    
  
    // Handles file upload event and updates state
    function handleUpload(event) {
      setFile(event.target.files[0]);
  
      // Add code here to upload file to server
      // ...
    }
    <input type="file" onChange={handleUpload} />
    return(null);
    
  }

    function DisplayImage() {
    return (
        <div id="upload-box">
          
          {file && <ImageThumb image={file} />}
        </div>
      );
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

    
    return (props.trigger)? (
        <div className="popUp">            
            <div className="popup-inner">
                <div className="img-content">
                    <p className="img">{DisplayImage}</p>
                    <FileUpload className="btn btn-success"/>
                </div>
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
            </div>
                {/* <div className= "popup-inner">
                    <h1>Employee Information</h1>
                    <div className="information">
                        <form action="">
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">
                                    Name:
                                    </label>
                                <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Enter name"
                                />
                                <label htmlFor="name" className="form-label">
                                    Age :
                                    </label>
                                <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Enter age"
                                />
                                <label htmlFor="name" className="form-label">
                                    Country :
                                    </label>
                                <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Enter country"
                                />
                                <label htmlFor="name" className="form-label">
                                    Position :
                                    </label>
                                <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Enter position"
                                />
                                <label htmlFor="name" className="form-label">
                                    Wage :
                                    </label>
                                <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Enter wage"
                                />
                            </div>
                            <button className="btn btn-success"> Add Employee</button>
                        </form>
                    </div>
                    <hr/>
                    <div className="employees">
                        <button className="btn btn-primary">Show employees</button>
                    </div>
                </div> */}
                <RiCloseCircleFill className="close-btn" />
            {props.children }
        </div>
    ): ""; 
}

export default PopUp

