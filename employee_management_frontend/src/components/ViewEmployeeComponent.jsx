import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

const EMPLOYEE_API_BASE_URL = 'http://localhost:8080/api/v1/employees'

const ViewEmployeeComponent = () => {

    const [employee, setEmployee] = useState([])

    const params = useParams()

    const fetchEmployee = () => {
        fetch(EMPLOYEE_API_BASE_URL + '/' + params.id, {
            method: 'GET',
        }).then((response) => response.json()).then((data) => {
            setEmployee(data)
        });
    }

    useEffect(() => {
        fetchEmployee();
    }, [])

    return (
        <div>
            <div className="card col-md-6 offset-md-3">
                <h3 className="text-center">View Employee Details</h3>
                <div className="card-body">
                    <div className="row">
                        <label>Employee First Name: </label>
                        <div>{employee.firstName}</div>
                        <label>Employee Last Name: </label>
                        <div>{employee.lastName}</div>
                        <label>Employee Email Id: </label>
                        <div>{employee.emailId}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewEmployeeComponent;