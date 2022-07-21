const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name,id,email){
        super(name,id,email);
  
    }
    getRole() {
        return `This is an Manager`
    }
}

module.exports = Manager;