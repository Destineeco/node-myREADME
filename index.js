// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
const path = import('path');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'enter your project title'

    },
    {
        type: 'input',
        name: 'description',
        message: 'input your projects description'

    },
    {
        type: 'input',
        name: 'installation',
        message: 'please install instructions'

    },
    {
        type: 'input',
        name: 'usage',
        message: 'please input usage instructions'

    },
    {
        type: 'input',
        name: 'contributing',
        message: 'please input contributing guidelines'

    },
    {
        type: 'list',
        name: 'license',
        message: 'choose a licence for your project',
        choices: [
            'MIT License',
            'Apache License 2.0',
            'GNU General Public License v3.0',
            'BSD 3-Clause License',
            'Creative Commons Zero v1.0 Universal',
            'No License'
            ],
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Test instructions:',

    },
    {
        type: 'input',
        name: 'email',
        message: 'Your email address for questions:'
    },
    {
        type: 'input',
        name: 'gituser',
        message: 'please enter the link to your github'
    },
   

];
