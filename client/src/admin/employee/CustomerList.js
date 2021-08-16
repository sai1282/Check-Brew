import React from "react";
import Axios from "axios";
import "./customerList.css";
import { useState } from "react";
import { FcPlus } from "react-icons/fc";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { RiGenderlessFill } from "react-icons/ri";
import Popup from "./PopUp";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

function CustomerList() {
  const [buttonPopup, setButtonPopup] = useState(false);

  const classes = useStyles();

  const [employeeList, setEmployeeList] = useState([]);

  const getEmployee = () => {
    Axios.get("http://localhost:3001/employee").then((response) => {
      //respnse is data from the link
      setEmployeeList(response.data); //resonse.data will keep in employeeList
    });
  };

  return (
    <div className="customerList">
      <div className="header">
        <h1 className="h1">Staff List</h1>
        <button className="btn-add" onClick={() => setButtonPopup(true)}>
          Add Staff{" "}
        </button>
      </div>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Employee name</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">Country</TableCell>
              <TableCell align="right">Position</TableCell>
              <TableCell align="right">Wage</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employeeList.map((employee) => (
              <TableRow key={employee.name}>
                <TableCell component="th" scope="row">
                  {employee.name}
                </TableCell>
                <TableCell align="right">{employee.age}</TableCell>
                <TableCell align="right">{employee.country}</TableCell>
                <TableCell align="right">{employee.position}</TableCell>
                <TableCell align="right">{employee.wage}</TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TableContainer component={Paper}>
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
            <TableCell align="right">{row.calories}</TableCell>
            <TableCell align="right">{row.fat}</TableCell>
            <TableCell align="right">{row.carbs}</TableCell>
            <TableCell align="right">{row.protein}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer> */}

      {getEmployee()}
      {/* <h1>{this.employeeList.map(employee => {employee.name})}</h1> */}

      {/* {employeeList.map((val, key) => {
        return (
          <div className="employee card">
            <div className="card-body text-left">
              <p className="card-text">Name: {val.name}</p>
              <p className="card-text">Age: {val.age}</p>
              <p className="card-text">Country: {val.country}</p>
              <p className="card-text">Position: {val.position}</p>
              <p className="card-text">Wage: {val.wage}</p>
            </div>
          </div>
        );
      })} */}

      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup>
    </div>
  );
}

export default CustomerList;
