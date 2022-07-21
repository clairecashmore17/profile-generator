const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

const team = [];
function createEmployee (type){
    if(type ==='Engineer'){
        inquirer
            .prompt([   
                {
                    type: 'text',
                    name: 'name',
                    message : "What is your engineer's name?"
                },
                {
                    type:'number',
                    name: 'id',
                    message: 'What is  their ID?'
                },
                {
                    type: 'text',
                    name: 'email',
                    message: 'What is their email?'
                },
                {
                    type: 'text',
                    name: 'github',
                    message: "What is their Github?"
                },
                {
                    type: 'confirm',
                    name: 'addMember',
                    message: 'Would you like to add another team member?'
                }
            ])
            .then(({ name,id,email,github, addMember}) => {
                const engineer = new Engineer(name,id,email,github);
                team.push(engineer);
                console.log('This is your team: ' + team);
                if(addMember){
                    console.log('You want to add another member!');
                    addAnotherMember();
            
                } else {
                    console.log('No members to add');
                    return;
                }
                
            })
    }
    else if(type === 'Intern'){
        inquirer
        .prompt([   
            {
                type: 'text',
                name: 'name',
                message : "What is your interns's name?"
            },
            {
                type:'number',
                name: 'id',
                message: 'What is  their ID?'
            },
            {
                type: 'text',
                name: 'email',
                message: 'What is their email?'
            },
            {
                type: 'text',
                name: 'school',
                message: "What school do they attend?"
            },
            {
                type: 'confirm',
                name: 'addMember',
                message: 'Would you like to add another team member?'
            }
        ])
        .then(({ name,id,email,github, addMember}) => {
            const intern = new Intern(name,id,email,github);
            team.push(intern);
            console.log('This is your team: ' + team);
            // console.log(intern);
            if(addMember){
                console.log('You want to add another member!');
                addAnotherMember();
        
            } else {
                console.log('No members to add');
                return;
            }
            
        })
    }
    else if(type === 'Manager'){
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
                type:'number',
                name: 'office',
                message: 'What is your their office number?'
            },
            {
                type: 'confirm',
                name: 'addMember',
                message: 'Would you like to add another team member?'
            }
            
        ])
        .then(({ name,id,email, addMember}) => {
            const manager = new Manager(name,id,email);
            team.push(manager);
            console.log('This is your team: ' + team);
            if(addMember){
                console.log('You want to add another member!');
                addAnotherMember();
        
            } else {
                console.log('No members to add');
                return;
            }
            
            
        })
    }

}

function addAnotherMember(){
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'action',
            message: 'Which kind of member are you adding?',
            choices: ["Engineer", "Intern","I'm finished"]
        }
    ])
    .then(({ action }) => {
        if(action === 'Engineer'){
            console.log('You are adding an engineer to the team');
            createEmployee(action);
        }
        else if(action === "Intern") {
            console.log('you are adding an intern');
            createEmployee(action);
        }
        else if(action === "I'm finished"){
            console.log('you are done making your team');
            return;
        }
    })
}


createEmployee('Manager');

module.exports = team;
