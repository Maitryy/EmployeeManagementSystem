import React, { Component } from 'react'
import axios from 'axios'

const EMPLOYEE_APT_BASE_URL = "http://localhost:8090/api/v1/employees"


class EmployeeService {
    getEmployees()
    {
        return axios.get(EMPLOYEE_APT_BASE_URL)
    }
    createEmployee(employee)
    {
        return axios.post(EMPLOYEE_APT_BASE_URL, employee);
    }
}

export default new EmployeeService()