import React from "react";
import Axios from "axios";
import { useState } from "react";

function Inventory() {
  const [employeeList, setEmployeeList] = useState([]);

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  const addEmployee = () => {
    Axios.post("http://localhost:3001/create", {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage,
    }).then(() => {
      setEmployeeList([
        ...employeeList, //keep old data when adding the new data
        {
          name: name,
          age: age,
          country: country,
          position: position,
          wage: wage,
        },
      ]);
    });
  };

  return (
    <div className="stock">
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
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
              <label htmlFor="name" className="form-label">
                Age :
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter age"
                onChange={(event) => {
                  setAge(event.target.value);
                }}
              />
              <label htmlFor="name" className="form-label">
                Country :
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter country"
                onChange={(event) => {
                  setCountry(event.target.value);
                }}
              />
              <label htmlFor="name" className="form-label">
                Position :
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter position"
                onChange={(event) => {
                  setPosition(event.target.value);
                }}
              />
              <label htmlFor="name" className="form-label">
                Wage :
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter wage"
                onChange={(event) => {
                  setWage(event.target.value);
                }}
              />
            </div>
            <button className="btn btn-success" onClick={addEmployee}> Add Employee</button>
          </form>
          
        </div>
    </div>
  );
}

export default Inventory;
