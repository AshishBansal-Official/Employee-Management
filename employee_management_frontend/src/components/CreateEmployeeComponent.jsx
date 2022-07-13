import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { axios } from 'axios';

const EMPLOYEE_API_BASE_URL = 'http://localhost:8080/api/v1/employees'

const CreateEmployeeComponent = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailId, setEmailId] = useState("");

    const navigate = useNavigate();

    const saveEmployee = (event) => {
        event.preventDefault();
        let employee = {firstName: firstName, lastName: lastName, emailId: emailId };
        fetch(EMPLOYEE_API_BASE_URL, {
            method: 'POST',
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify(employee)
        }).then(() => {
            navigate("/employees")
        })
    }

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <h3 className='text-center'>Add Employee</h3>
                        <div className='card-body'>
                            <form onSubmit={saveEmployee}>
                                <div className='form-group'>
                                    <label>First Name: </label>
                                    <input required placeholder="First Name" name="firstName" className="form-control"
                                        value={firstName} onChange={(firstName) => setFirstName(firstName.target.value)} />
                                </div>
                                <br />
                                <div className='form-group'>
                                    <label>Last Name: </label>
                                    <input required placeholder="Last Name" name="lastName" className="form-control"
                                        value={lastName} onChange={(lastName) => setLastName(lastName.target.value)} />
                                </div>
                                <br />
                                <div className='form-group'>
                                    <label>Email Id: </label>
                                    <input required placeholder="Email Id" name="emailId" className="form-control"
                                        value={emailId} onChange={(emailId) => setEmailId(emailId.target.value)} />
                                </div>
                                <br />
                                <button className='btn btn-success'>Save</button>
                                <button className='btn btn-danger' onClick={() => navigate('/employees', { replace: true })} style={{ marginLeft: "10px" }}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default CreateEmployeeComponent;