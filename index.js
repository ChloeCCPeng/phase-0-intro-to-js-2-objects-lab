// Write your solution in this file!
const employee = {
    name: "chloe",
    streetAddress: "1234 abc rd.",
};
console.log(employee);

function updateEmployeeWithKeyAndValue(employee, name, streetAddress){
    //employee[name] = streetAddress;
    const newEmployee = { ...employee};
    newEmployee.streetAddress = "11 Broadway";
    newEmployee.name = "Sam";
    return newEmployee;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, streetAddress){
    const newEmployee = employee;
    newEmployee.streetAddress = "12 Broadway";
    newEmployee.name = "Sam";
    return newEmployee;
};

function deleteFromEmployeeByKey(newEmployee, name){
    const newEmployee2 = { ...newEmployee};
    delete newEmployee2.name;
    return newEmployee2;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name;
    return employee;
}