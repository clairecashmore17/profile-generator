const generateMember = teamArr =>{
    return `
        ${teamArr
            .map(({ name, email, special}) => {
                return `
                    This is ${name} whos email is ${email} and heres this ${special}
                `;
            })
            .join('')
        }
    `
}
const generatePage = team => {
    console.log('generating page html');
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
        ${generateMember(team)}
    </body>
    
    </html>
    `;
    
};

module.exports = generatePage;