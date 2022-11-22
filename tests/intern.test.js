//things to test
const intern = require('../lib/intern');

//school
test('intern', function() {
    var intern = intern();
        expect(intern.school).toEqual(expect.any(String));
    });

//getSchool()
test('school', function() {
    var intern = intern();
        expect(intern.getSchool()).toExpect(expect.any(String));
    });

//getRole() //Overide return Engineer
test('role', function() {
    var intern = intern();
        expect(intern.getRole()).toExpect("Intern");
    });