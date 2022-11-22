//things to test
//reference file to test
const employee = require('../lib/employee');

//name
test('name is string', function() {
    var employee = employee();
    expect(employee.name).toEqual(expect.any(String));
    
});

//id
test('id is value', function() {
    var employee = employee();
    expect(employee.id).toEqual(expect.any(Number));
    
    });

//email
test('email is value', function() {
    var employee = employee();
    expect(employee.email).toEqual(expect.any(String));
    });

//getName()
test('name', function() {
    var employee = employee();
        expect(employee.getName()).toEqual(expect.any(String));
    });

//getId()
test('id', function() {
    var employee = employee();
        expect(employee.getId()).toEqual(expect.any(Number));
    });

//getEmail()
test('email', function() {
    var employee = employee();
        expect(employee.getEmail()).toEqual(expect.any(String));
    });

//getRole() returns Employee
test('role', function() {
    var employee = employee();
        expect(employee.getRole()).toExpect("Employee");
    });