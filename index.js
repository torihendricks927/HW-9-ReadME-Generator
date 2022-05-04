const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

inquirer
.prompt([
    {
    type: "input",
    message: "What is the title for your ReadME?",
    name: "title",
},
{
    type: "input",
    message: "What is the description for your ReadME?",
    name: "description", 
},
{
    type: "input",
    message: "What are the installation instructions for your ReadME?",
    name: "installation",
},
{
    type: "input",
    message: "What is the usage information for your ReadME?",
    name: "usage",
},
{
    type: "input",
    message: "What are the contribution guidelines for your ReadME?",
    name: "contribution",
},
{
    type: "input",
    message: "What are the test instructions for your ReadME?",
    name: "test",
},
{
    type: "list",
    message: "Which license do you wish to add to your ReadME?",
    name: "license",
    choices: ["Apache", "MIT", "GNU"],
},
{
    type: "input",
    message: "What is your github username?",
    name: "github",
},
{
    type: "input",
    message: "What is your email address?",
    name: "email",
},
])

.then((response) => {

//  const readmeTemp = `
// # ${response.title}

// ## Description
// ${response.description}.

// ## Installation
// ${response.installation}.

// ## Usage
// ${response.usage}.

// ## Contributing
// ${response.contribution}.

// ## Tests
// ${response.test}.

// ## License
// ${response.license}.

// ## Questions
// For any additional questions, you can reach me at the following options:
// ${response.github}.
// ${response.email}.
// `

// //  return readmeTemp,

 fs.writeFileSync('SAMPLE.md', generateMarkdown(response), (err) =>
 err ? console.error(err) : console.log("Success!")

 )}
)

// .then(function renderLicenseSection(response) {
//     console.log(response)
//     for(let i = 0; i < response.license; i++) {
//         if (response.license === 0) {
//             ( `Copyright

//                 Licensed under the Apache License, Version 2.0 (the "License");
//                 you may not use this file except in compliance with the License.
//                 You may obtain a copy of the License at
             
//                   http://www.apache.org/licenses/LICENSE-2.0
             
//                 Unless required by applicable law or agreed to in writing, software
//                 distributed under the License is distributed on an "AS IS" BASIS,
//                 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//                 See the License for the specific language governing permissions and
//                 limitations under the License.`)
//         } else if (response.license === 1) {
//             (`Copyright

//                 Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
                
//                 The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
                
//                 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`)
//         } else {
//             (`  Copyright (C) 

//             This program is free software: you can redistribute it and/or modify
//             it under the terms of the GNU General Public License as published by
//             the Free Software Foundation, either version 3 of the License, or
//             (at your option) any later version.
        
//             This program is distributed in the hope that it will be useful,
//             but WITHOUT ANY WARRANTY; without even the implied warranty of
//             MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//             GNU General Public License for more details.
        
//             You should have received a copy of the GNU General Public License
//             along with this program.  If not, see <https://www.gnu.org/licenses/>.
//             `)
//         }
//     };

//     return readmeTemp
// },




