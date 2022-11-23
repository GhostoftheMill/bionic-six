// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

//Team members
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');

//Avengers Assemble!!!
const assemble = [];

const managerProfile = function() {
    inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Enter manager name.',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter manager ID#.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter manager email address.',
    },
        type: 'input',
        name: 'number',
        message: 'Enter manager phone number.',
  ])
  .then(answers => {
    const  { name, id, email, officeNumber } = answers; 
    const leader = new manager (name, id, email, officeNumber);

    teamData.push(leader); 
})
};
  
const nextProfile = function() {
        inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Add another employee.',
            choices: ['Engineer', 'Intern'],
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter employee ID#.',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter employee email address.',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter employee GitHub.',
            when: (input) => input.role === "Engineer",
        
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter employees school.',
            when: (input) => input.role === "School",
        },
        {
            type: 'confirm',
            name: 'addmore',
            message: 'Add another team member?',
        }
      ])
   
const addManager = function (manager) {
    return `
        <article>
            <div>
                <h2>${manager.name}</h2>
                <h3>Manager</h3>
                <p>ID: ${manager.id}</p>
                <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p>Telephone #: ${manager.number}</p>
            </div>
        </article>`;
    }

const addEngineer = function (engineer) {
    return `
        <article>
            <div>
                <h2>${engineer.name}</h2>
                <h3>Engineer</h3>
                <p>ID: ${engineer.id}</p>
                <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p>Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </article>`
}
    
const addIntern = function (intern) {
    return `
        <article>
            <div>
                <h2>${intern.name}</h2>
                <h3>Intern</h3>
                <p>ID: ${intern.id}</p>
                <p>Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p>School: ${intern.school}</p>
            </div>
    </article>`
    };
    
generateHtml = (data) => {
    
teamData = []; 
    
    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 
    
    if (role === 'Manager') {
        const managerCard = addManager(employee);
            teamData.push(managerCard);
    }
    
    if (role === 'Engineer') {
        const engineerCard = addEngineer(employee);
            teamData.push(engineerCard);
    }
    
    if (role === 'Intern') {
        const internCard = addIntern(employee);
            teamData.push(internCard);
    }}
    
    const teamProfile = teamData.join('')
    
    const team = generateHtml(teamProfile); 
        return team;    
}
    
const generateHtml = function (teamProfile) {   
    return
        `<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Team Members</title>
          <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <header>
                <h1>Coworkers Assemble!</h1>
            </header>
            <main>
              <section>
                ${teamProfile}
              </section>
          </main>
      </body>
      </html>`;
}

fs.writeFile('./dist/index.html', htmlContent, (err) =>
      err ? console.log(err) : console.log('Find index.html in /dist!')
    );
};


