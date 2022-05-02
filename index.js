const fs = require("fs");

const inquirer = require("inquirer");

inquirer
.prompt([
    {
        type: "title",
        message: "What is the title for your ReadME?",
        name: "title",
    },
    {
        type: "description",
        message: "What is the description for your ReadME?",
        name: "description", 
    },
    {
        type: "installation",
        message: "What are the installation instructions for your ReadME?",
        name: "installation",
    },
    {
        type: "usage",
        message: "What is the usage information for your ReadME?",
        name: "usage",
    },
    {
        type: "contribution",
        message: "What are the contribution guidelines for your ReadME?",
        name: "contribution",
    },
    {
        type: "test",
        message: "What are the test instructions for your ReadME?",
        name: "test",
    },
    // need to add badge to top and license info at bottom of ReadMe,
    // must provide options
    {
        type: "license",
        message: "Which license do you wish to add to your ReadME?",
        name: "license",
    },
    {
        type: "github",
        message: "What is your github username?",
        name: "github",
    },
    {
        type: "email",
        message: "What is your email address?",
        name: "email",
    }
])