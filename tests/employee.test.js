//things to test
//name
//id
//email
//getName()
//getId()
//getEmail()
//getRole() returns Employee

//reference file to test
const employee = require('../lib/employee');

test('name is string', function() {
    var employee = Employee();
    expect(employee.name).toEqual(expect.any(String));
    
})