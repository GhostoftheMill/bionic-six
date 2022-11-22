//things to test
const manager = require('../lib/manager');

//officeNumber
test('manager', function() {
    var manager = manager();
        expect(manager.number).toEqual(expect.any(value));
    });

//getRole() // Override return Manager
test('role', function() {
    var manager = manager();
        expect(manager.getRole()).toExpect("Manager");
    });