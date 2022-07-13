import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EMPLOYEE_API_BASE_URL = 'http://localhost:8080/api/v1/employees'

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([]);

    const navigate = useNavigate();

    const fetchEmployees = () => {
        fetch(EMPLOYEE_API_BASE_URL).then((response) => response.json()).then((data) => setEmployees(data));
    }

    const deleteEmployee = (id) => {
        fetch(EMPLOYEE_API_BASE_URL + '/' + id, {
            method: 'DELETE',
            headers: { 'Content-Type': "application/json" },
        }).then(() => {
            setEmployees(employees.filter(employees => employees.id !==id));
        })
    }

    useEffect(() => {
        fetchEmployees();
    }, []);

    return (
        <div>
            <h2 className='text-center'>Employees List</h2>
            <button className='btn btn-primary btn' onClick={() => { navigate('/add-employee') }}>Add Employee</button><br /><br />
            <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>Employee First Name</th>
                            <th>Employee Last Name</th>
                            <th>Employee Email Id</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {employees.length > 0
                            ? (

                                employees.map(
                                    (employee) =>
                                        <tr key={employee.id}>
                                            <td>{employee.firstName}</td>
                                            <td>{employee.lastName}</td>
                                            <td>{employee.emailId}</td>
                                            <td>
                                                <button onClick={() => { navigate(`/update-employee/${employee.id}`) }} className="btn btn-info">Update</button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => { deleteEmployee(employee.id) }} className="btn btn-danger">Delete</button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => { navigate(`/view-employee/${employee.id}`) }} className="btn btn-info">View</button>
                                            </td>
                                        </tr>
                                )
                            )
                            : (
                                <></>
                            )
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );

}

export default ListEmployeeComponent;