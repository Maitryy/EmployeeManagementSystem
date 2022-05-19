import React, { Component } from 'react'
import axios from 'axios'

const EMPLOYEE_APT_BASE_URL = "http://localhost:8090/api/v1/employees"


class EmployeeService {
    getEmployees()
    {
        return axios.get(EMPLOYEE_APT_BASE_URL)
    }
}

export default new EmployeeService()