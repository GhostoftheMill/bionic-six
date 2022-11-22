//class properties + Employee
const employee = require('./employee');

//school
//creates intern class that is child of employee class
class intern extends employee {
    constructor (name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    }
}

//class methods
//getSchool()
getSchool () {
    return this.school;
}

//getRole // override return Intern
getRole () {
    return "Intern";
}

module.exports = intern;