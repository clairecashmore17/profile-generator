const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template');
const {writeFile, copyFile} = require('./utils/generate-site.js');
const team = [];


// const mockTeam = [
//     manager = new Manager ('Claire',  1,'cbear',  4),
//     engineer = new Engineer('BOb',2, 'bobmail,', 'clairecashmore17'),
//     intern = new Intern('mil', 3, 'milmail','harvard')
// ];
// console.log(mockTeam);
function createEmployee (type) {
    if(type ==='Engineer'){
        inquirer
            .prompt([   
                {
                    type: 'text',
                    name: 'name',
                    message : "What is your engineer's name?",
                    validate: name => {
                        if(name){
                            return true;
                        }
                        else {
                            console.log("You must provide an answer!");
                            return false;
                        }
                    }
                },
                {
                    type:'number',
                    name: 'id',
                    message: 'What is  their ID?',
                    validate: id => {
                        if(id){
                            return true;
                        }
                        else {
                            console.log("You must provide an answer!");
                            return false;
                        }
                    }
                },
                {
                    type: 'text',
                    name: 'email',
                    message: 'What is their email?',
                    validate: email => {
                        if(email){
                            return true;
                        }
                        else {
                            console.log("You must provide an answer!");
                            return false;
                        }
                    }
                },
                {
                    type: 'text',
                    name: 'github',
                    message: "What is their Github?",
                    validate: github => {
                        if(github){
                            return true;
                        }
                        else {
                            console.log("You must provide an answer!");
                            return false;
                        }
                    }
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
                    const pageHTML = generatePage(team);
                    writeFile(pageHTML);
                    copyFile();
                }
                
            })
    }
    else if(type === 'Intern'){
        inquirer
        .prompt([   
            {
                type: 'text',
                name: 'name',
                message : "What is your interns's name?",
                validate: name => {
                    if(name){
                        return true;
                    }
                    else {
                        console.log("You must provide an answer!");
                        return false;
                    }
                }
            },
            {
                type:'number',
                name: 'id',
                message: 'What is  their ID?',
                validate: id => {
                    if(id){
                        return true;
                    }
                    else {
                        console.log("You must provide an answer!");
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'email',
                message: 'What is their email?',
                validate: email => {
                    if(email){
                        return true;
                    }
                    else {
                        console.log("You must provide an answer!");
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'school',
                message: "What school do they attend?",
                validate: school => {
                    if(school){
                        return true;
                    }
                    else {
                        console.log("You must provide an answer!");
                        return false;
                    }
                }
            },
            {
                type: 'confirm',
                name: 'addMember',
                message: 'Would you like to add another team member?'
            }
        ])
        .then(({ name,id,email,school, addMember}) => {
            const intern = new Intern(name,id,email,school);
            team.push(intern);
            console.log('This is your team: ' + team);
            // console.log(intern);
            if(addMember){
                console.log('You want to add another member!');
                addAnotherMember();
        
            } else {
                console.log('No members to add');
                const pageHTML = generatePage(team);
                writeFile(pageHTML);
                copyFile();
            }
            
        })
    }
    else if(type === 'Manager'){
        inquirer
        .prompt([   
            {
                type: 'text',
                name: 'name',
                message : "What is your team manager's name?",
                validate: name => {
                    if(name){
                        return true;
                    }
                    else {
                        console.log("You must provide an answer!");
                        return false;
                    }
                }
            },
            {
                type:'number',
                name: 'id',
                message: 'What is their ID?',
                validate: id => {
                    if(id){
                        return true;
                    }
                    else {
                        console.log("You must provide an answer!");
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'email',
                message: 'What is their email?',
                validate: email=> {
                    if(email){
                        return true;
                    }
                    else {
                        console.log("You must provide an answer!");
                        return false;
                    }
                }
            },
            {
                type:'number',
                name: 'office',
                message: 'What is their office number?',
                validate: office => {
                    if(office){
                        return true;
                    }
                    else {
                        console.log("You must provide an answer!");
                        return false;
                    }
                }
            },
            {
                type: 'confirm',
                name: 'addMember',
                message: 'Would you like to add another team member?'
            }
            
        ])
        .then(({ name,id,email, addMember, office}) => {
            const manager = new Manager(name,id,email,office);
            team.push(manager);
            console.log('This is your team: ' + team);
            if(addMember){
                console.log('You want to add another member!');
                addAnotherMember();
        
            } else {
                console.log('No members to add');
                const pageHTML = generatePage(team);
                writeFile(pageHTML);
                copyFile();
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
            
            const pageHTML = generatePage(team);
            writeFile(pageHTML);
            copyFile();
            return;
        }
    })
}


createEmployee('Manager')



