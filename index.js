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
        choices: ["Apache", "MIT", "GNU"],
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
    },
])
.then((response) => {

    const readmeTemp = `
    # ${response.title}

## Description
${response.description}.

## Installation
${response.installation}.

## Usage
${response.usage}.

## Contributing
${response.contribution}.

## Tests
${response.test}.

## License
${response.license}.

## Contact
${response.github}.
${response.email}.
`
})
.then(function (response) {
    for(let i = 0; i < response.license; i++) {
        if (response.license === 0) {
            ( `Copyright

                Licensed under the Apache License, Version 2.0 (the "License");
                you may not use this file except in compliance with the License.
                You may obtain a copy of the License at
             
                  http://www.apache.org/licenses/LICENSE-2.0
             
                Unless required by applicable law or agreed to in writing, software
                distributed under the License is distributed on an "AS IS" BASIS,
                WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                See the License for the specific language governing permissions and
                limitations under the License.`)
        } else if (response.license === 1) {
            (`Copyright

                Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
                
                The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
                
                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`)
        } else {
            (``)
        }
    }
})