const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name,id,email,office){
        super(name,id,email);
        this.office = office;
    }
    getRole() {
        return `This is an Manager`
    }
}

module.exports = Manager;