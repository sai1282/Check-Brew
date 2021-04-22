import { useState } from 'react';
import './UserHome.css';
import React from 'react';
import Axios from 'axios';

function UserHome() {
    const [employeeList, setEmployeeList] = useState( [] );

    const getEmployee = () => {
        Axios.get('http://localhost:3001/employee').then((response) => { //respnse is data from the link
            setEmployeeList(response.data); //resonse.data will keep in employeeList
        });
    }
    return (
        <div className='userHome'>
            {getEmployee()}
            {employeeList.map((val, key) => {
                return(
                    <div className="employee card">
                        <div className="card-body text-left">
                            <p className="card-text">Name: {val.name}</p>
                            <p className="card-text">Age: {val.age}</p>
                            <p className="card-text">Country: {val.country}</p>
                            <p className="card-text">Position: {val.position}</p>
                            <p className="card-text">Wage: {val.wage}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default UserHome;
