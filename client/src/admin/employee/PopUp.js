import React from 'react'
import { useState } from 'react';
import Axios from 'axios';
import {RiCloseCircleFill} from 'react-icons/ri';
import './PopUp.css';

function PopUp(props) {
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
    props.setTrigger(false);
  };

    return (props.trigger)? (
        //if it true
        <div className="popUp">            
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
            <button  onClick={addEmployee}> Add Employee</button>
          </form>
          <RiCloseCircleFill className="close-btn" onClick={() => props.setTrigger(false)}/>
        </div>
    
                
            {props.children }
        </div>
    //if is false
    ): "";
}

export default PopUp
