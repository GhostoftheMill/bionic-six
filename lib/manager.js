//class properties + Employee
const employee = require('./employee');

//officeNumber
class manager extends employee {
    constructor (name, id, email, number) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.number = number;
    }


//class methods
//getRole() // return Manager
    getRole () {
        return 'Manager';
    }

}

module.exports = manager;