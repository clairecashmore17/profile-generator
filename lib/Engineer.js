const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name,id,email){
        super(name,id,email);

        
    }
    //overriding the getRole method from Employee
    getRole() {
        return `This is an Engineer`
    }
}

module.exports = Engineer;