const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');


inquirer
.prompt([   
    {
        type: 'text',
        name: 'name',
        message : "What is your team manager's name?"
    },
    {
        type:'number',
        name: 'id',
        message: 'What is your their ID?'
    },
    {
        type: 'text',
        name: 'email',
        message: 'What is their email?'
    },
    {
        type: 'confirm',
        name: 'addMember',
        message: 'Would you like to add another team member?'
    }
    
])
.then(({ name,id,email, addMember}) => {
    const manager = new Manager(name,id,email);
    console.log(manager);
    if(addMember){
        console.log('You want to add another member!');
        return;

    } else {
        console.log('No members to add');
        return;
    }
    
})
