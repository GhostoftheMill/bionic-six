//class properties + Employee
const employee = require('./employee');

//github // GitHub username
class manager extends employee {
    constructor (name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }

//class methods
//get GitHub()
    getGithub () {
        return this.github;
    }

//getRole() // Override return Intern
  getRole () {
        return 'Manager';
    }
}

module.exports = engineer;