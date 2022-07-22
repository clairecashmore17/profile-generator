const Engineer = require('../lib/Engineer');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');

const generateEngineer = teamArr =>{
    // console.log(teamArr);

    // Defining separate arrays for each type of member by filtering them out from the team with their class
    let engineerMembers = teamArr.filter(engineer => engineer instanceof Engineer);


    console.log(engineerMembers);
    
    // If the engineer Members array is not empty, add their sections
    
    if(engineerMembers){
        console.log('engineers array had conten, making html')
        return `
        Printing Engineers
        ${engineerMembers
            .map(({ name, email, id, github}) => {
                return `
                    This is ${name} whos email is ${email} whos id is ${id} and github is ${github}
                `;
            })
            .join('')
        }
    `
    }
  
}
const generateIntern = teamArr =>{
    // console.log(teamArr);

    // Defining separate arrays for each type of member by filtering them out from the team with their class
   
    let internMembers = teamArr.filter(intern => intern instanceof Intern);

    
    console.log(internMembers);
    // If the engineer Members array is not empty, add their sections
    
   
    if(internMembers){
        console.log('interns array had conten, making html');
        return `
        Printing Interns
        ${internMembers
            .map(({ name, email, id, school}) => {
                return `
                    This is ${name} whos email is ${email} whos id is ${id} and who attended ${school}
                `;
            })
            .join('')
        }
        `
    }
    
}
const generateManager = teamArr =>{
   
    // Defining separate arrays for each type of member by filtering them out from the team with their class
    
    let managerMembers = teamArr.filter(manager => manager instanceof Manager);
    console.log(managerMembers);
    if(managerMembers){
        console.log('managers array had conten, making html');
        return `
        Printing Manager
        ${managerMembers
            .map(({ name, email, id, office}) => {
                return `
                    This is ${name} whos email is ${email} who's id is ${id} and resides in office number ${office}
                `;
            })
            .join('')
        }
    `
    }
}

const generatePage = team => {
    console.log('generating page html');
    // console.log(team);
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        ${generateManager(team)}
        ${generateEngineer(team)}
        ${generateIntern(team)}

    </body>
    
    </html>
    `;
    
};

module.exports = generatePage;