import React, { Component } from 'react'

export default class ListEmployeeComponent extends Component {
    constructor(props)
    {
        super(props)

        this.state = {
            employees: [{
                firstName: "Maitry",
                LastName: "Jadiya",
                emailId: "maitry@gmail.com",
                action: "delete"
            }]
        }
    }
  render() {
    return (
      <div>
        <h2 className="text-center">Employees List</h2>
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
                            <tr key = {employee.id}>
                                <td>{employee.firstName}</td>
                                <td>{employee.LastName}</td>
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
