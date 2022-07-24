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
       
        ${engineerMembers
            .map(({ engineer }) => {
                return `
                <section class="member">
                <div class = "title-header">
                    <h2 class="title" >${engineer.getName()}</h2>
                    <p class="role"> <span class="oi oi-cog"></span> Engineer</p>
                </div>

                 <!-- Member Info Section -->
                 <div class="member-info">
                    <div class="id-section">
                        <p class ="id">ID: ${engineer.getId()}</p>
                    </div>
                    <div class="email-section">
                        <p class="email">Email: <a href="mailto:${engineer.getEmail()}"> ${engineer.getEmail()}</a></p>
                    </div>
                    <div class="skill-section">
                        <p class="skill"> Github:<a href ="https://github.com/${engineer.getGithub()}">  ${engineer.getGithub()}</a></p>
                    </div>
                </div>
            </section>
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
       
        ${internMembers
            .map(({ name, email, id, school}) => {
               return `
                <section class="member">
                <div class = "title-header">
                    <h2 class="title" >${name}</h2>
                    <p class="role"><span class="oi oi-book"></span> Intern</p>
                </div>

                 <!-- Member Info Section -->
                 <div class="member-info">
                    <div class="id-section">
                        <p class ="id">ID: ${id}</p>
                    </div>
                    <div class="email-section">
                        <p class="email">Email: <a href="mailto:${email}"> ${email}</a></p>
                    </div>
                    <div class="skill-section">
                        <p class="skill"> School: ${school}</p>
                    </div>
                </div>
            </section>
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
        ${managerMembers
            .map(({ name, email, id, office}) => {
              
                 return `
                <section class="member">
                <div class = "title-header">
                    <h2 class="title" >${name}</h2>
                    <p class="role"><span class="oi oi-book"></span> Manager</p>
                </div>

                 <!-- Member Info Section -->
                 <div class="member-info">
                    <div class="id-section">
                        <p class ="id">ID: ${id}</p>
                    </div>
                    <div class="email-section">
                        <p class="email">Email: <a href="mailto:${email}"> ${email}</a></p>
                    </div>
                    <div class="skill-section">
                        <p class="skill"> Office Number: ${office}</p>
                    </div>
                </div>
            </section>
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
        <title>Profile Generatro</title>
        
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
    </head>
    <body>
        <header>
            <h1 class="team-title"> Your Team </h1>
        </header>
        <main class="page-content">
            ${generateManager(team)}
            ${generateEngineer(team)}
            ${generateIntern(team)}
        </main>

    </body>
    
    </html>
    `;
    
};

module.exports = generatePage;