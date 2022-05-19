import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'


export default class ListEmployeeComponent extends Component {
    constructor(props)
    {
        super(props)

        this.state = {
            employees: [{
                firstName: "Maitry-hardcode",
                lastName: "Jadiya-3",
                emailId: "maitry@gmail.com",
                action: "delete"
            }]
        }

        this.addEmployee = this.addEmployee.bind(this);
    }
    componentDidMount(){
        EmployeeService.getEmployees().then((res)=>{
            this.setState({employees: res.data})
        })
    }
    addEmployee()
    {
        this.props.history.push('/add-employee')
    }
  render() {
    return (
      <div>
        <h2 className="text-center">Employees List</h2>
        <div className="row">
            <button className='btn btn-lg btn-primary' onClick={this.addEmployee}>
                Add Employee
            </button>
        </div>
        <div className="row">
            <table className='table table-stripped table-bordered'>
                <thead>
                    <tr>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email Id</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.employees.map(
                            employee => 
                            <tr key = {employee.emailId}>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.emailId}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
      </div>
    )
  }
}
