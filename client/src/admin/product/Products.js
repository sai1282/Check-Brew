import { React } from "react";
import { FcPlus } from "react-icons/fc";
import "./products.css";
import Popup from "./PopUp";
import Axios from "axios";
import { useState, state } from "react";

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { RiGenderlessFill } from "react-icons/ri";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, price, amount, issueDate, expireDate) {
  return { name, price, amount, issueDate, expireDate };
}

const rows = [
  createData('Cold Brew', '69 (baht)', 25, '2021-May-12', '2021-Aug-12'),
  createData('Green Tea', '49 (baht)', 10, '2021-May-10', '2021-Aug-10'),
  createData('Bread', '40 (baht)', 15, '2021-May-5', '2021-Aug-5'),
];


function Products() {

  /* state = {
    products: [],
  }; */

  const classes = useStyles();
  const [productList, setProductList] = useState([]);

  const [buttonPopup, setButtonPopup] = useState(false);

  
  function getProduct ()  {
    Axios.get("http://localhost:3001/product").then(response => {
      this.setState({ products: response.data });
  });
    }

  return (
    
    <div className="home">
      <h1>Product list</h1>
      {/* {getProduct()}
      <h1>{this.state.products.map(product => {product.product_name})}</h1> */}
      <FcPlus className="btn_addProduct" onClick={() => setButtonPopup(true)} />

      <TableContainer component={Paper}>
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Product Name</TableCell>
          <TableCell align="right">Price</TableCell>
          <TableCell align="right">Amount</TableCell>
          <TableCell align="right">Issue Date</TableCell>
          <TableCell align="right">Expire Date</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.name}>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">{row.price}</TableCell>
            <TableCell align="right">{row.amount}</TableCell>
            <TableCell align="right">{row.issueDate}</TableCell>
            <TableCell align="right">{row.expireDate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>

      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup>
    </div>
  );
}

export default Products;
