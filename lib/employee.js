//class properties
//name
//id
//email
class employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email
    }
}

//class methods
//getName()
getName () {
    return this.name;
}

//getId()
getId () {
    return this.id;
}

//getEmail()
getEmail () {
    return this.email;
}

//getRole() returns Employee
getRole () {
    return 'Employee';
}

module.exports = employee;