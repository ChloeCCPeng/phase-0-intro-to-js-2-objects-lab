const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway',
};

// const employee = {
//     name: "chloe",
//     streetAddress: "1234 abc rd.",
// };
// console.log(employee);

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee, [key]: value};
    return newEmployee;
}

// function updateEmployeeWithKeyAndValue(employee, name, streetAddress){
//     const newEmployee = { ...employee};
//     newEmployee.streetAddress = "11 Broadway";
//     newEmployee.name = "Sam";
//     return newEmployee;
// };

function destructivelyUpdateEmployeeWithKeyAndValue(employee){
    employee.streetAddress = '12 Broadway';
    return employee;
};

// function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, streetAddress){
//     const newEmployee = employee;
//     newEmployee.streetAddress = "12 Broadway";
//     newEmployee.name = "Sam";
//     return newEmployee;
// };

function deleteFromEmployeeByKey (employee, key, value){
    const newEmployee  = {...employee, [key]: value};
    delete newEmployee.key;
    return newEmployee;
}

// function deleteFromEmployeeByKey(newEmployee, name){
//     const newEmployee2 = { ...newEmployee};
//     delete newEmployee2.name;
//     return newEmployee2;
// }

function destructivelyDeleteFromEmployeeByKey(employee){
    delete employee.name;
    return employee;
}

// function destructivelyDeleteFromEmployeeByKey(employee, key){
//     delete employee.name;
//     return employee;
// }