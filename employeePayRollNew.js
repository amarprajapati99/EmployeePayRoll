const EmployeePayRoll = require('F:\employeepay-roll-app\employee-payroll-app\employeePayroll.js');
const EmployeePayrollForm = require('F:\employeepay-roll-app\employee-payroll-app\employeePayRollApp.html');

window.addEventListener('DOMContentLoaded', (event) => {
const name = document.querySelector('#name');
const nameError = document.querySelector('.name-error');
name.addEventListener('input', function(){
    if (name.value.length == 0) {
        nameError.textContent = "";
    return;
}
try {
    (new EmployeePayrollApp()).name = name.value;;
    nameError.textContent = "";
}
catch (e) {
    nameError.textContent = e;
}

const salary = document.querySelector('#salary');
            const output = document.querySelector('.salary-output');
            output.textContent = salary.value;
            salary.addEventListener('input', function () {
                output.textContent = salary.value;
            });
});
});
