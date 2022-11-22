//things to test
//employee exteded
const engineer = require('../lib/engineer');

//github //GitHub username
test('engineer', function() {
    var engineer = engineer();
        expect(engineer.github).toEqual(expect.any(String));
    });

//getGithub()
test('github', function() {
    var engineer = engineer();
        expect(engineer.getGithub()).toExpect(expect.any(String));
    });

//getRole() //Overide return Engineer
test('role', function() {
    var engineer = engineer();
        expect(engineer.getRole()).toExpect("Engineer");
    });