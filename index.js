const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template');
const team = [];

const createEmployee = (type) => {
    if(type ==='Engineer'){
       return inquirer
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
                    name: 'confirmAddMember',
                    message: 'Would you like to add another team member?',
                    default: false
                }
               
            ])
            .then(({ name,id,email,github,confirmAddMember }) => {
                const engineer = new Engineer(name,id,email,github);
                team.push(engineer);
                console.log('This is your team: ' + team);
                if(confirmAddMember){
                    return addAnotherMember();
                }
                
            })
    }
    else if(type === 'Intern'){
        return inquirer
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
                name: 'confirmAddMember',
                message: 'Would you like to add another team member?',
                default: false
            }
           
        ])
        .then(({ name,id,email,github,confirmAddMember }) => {
            const intern = new Intern(name,id,email,github);
            team.push(intern);
            console.log('This is your team: ' + team);
            // console.log(intern);
            if(confirmAddMember){
                return addAnotherMember();
            }
           
            
        })
    }
    else if(type === 'Manager'){
        return inquirer
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
                name: 'confirmAddMember',
                message: 'Would you like to add another team member?',
                default: false
            }
           
            
        ])
        .then(({ name,id,email,confirmAddMember }) => {
            const manager = new Manager(name,id,email);
            team.push(manager);
            console.log('This is your team: ' + team);
            if(confirmAddMember){
                return addAnotherMember();
            }
            
            
        })
    }

}

const addAnotherMember = () =>{
   return inquirer
    .prompt([
        {
            type: 'list',
            name: 'action',
            message: 'Which kind of member are you adding?',
            choices: ["Engineer", "Intern","I'm finished"]
        },
        
    ])
    .then(({ action }) => {
        
       
            console.log('you are adding another member');
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


    



