# Employee Tracker

![Node.js](https://camo.githubusercontent.com/85cba226a1290d078f1a437aa87cb872a5bdb30037fa96b8afcddf163cd5b328/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d4e6f64652e6a7326636f6c6f723d333339393333266c6f676f3d4e6f64652e6a73266c6f676f436f6c6f723d464646464646266c6162656c3d)
![MySQL](https://camo.githubusercontent.com/43cb8083b53aaf9847087cc27dcc556a66b7b1f32ca77c3091aed2e3f9c2c277/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d4d7953514c26636f6c6f723d343437394131266c6f676f3d4d7953514c266c6f676f436f6c6f723d464646464646266c6162656c3d)

## Built With

- Node.js
- MySQL
- Inquirer

## Description

Manage employee data using this command line Content Management System (CMS) built with Node.js, Inquirer, and MySQL. Options include: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role.

## Table of Contents

- [Employee Tracker](#employee-tracker)
  - [Built With](#built-with)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Visuals](#visuals)
  - [Tests](#tests)
  - [Credits](#credits)
  - [References](#references)
  - [License](#license)
  - [Contributing](#contributing)
  - [Badges](#badges)
  - [Questions](#questions)

## Installation

- Download Node.js at [Node.js](https://nodejs.org/en) if not already installed. You can check if it is installed by typing `node-v` in your command line.
- Fork the repo to make a copy.
- Next, clone the project using `git clone https://github.com/ianahart/employee-tracker.git`.
- To install dependencies, make sure you're in the root of the project and run `npm install`.
- In the root of the directory create a `.env` file and type `DB_PASSWORD=[your MySQL password here]`.
- in a terminal window navigate to the root of the project directory and run `mysql -u root -p`.
- Once inside the MySQL shell run `source db/schema.sql;` to create the database schema. After, run `source db/seeds.sql;` to seed the database with dummy data.

## Usage

- To start the application, use either `node index.js` or `npm start`.
- Select a task to perform and follow the guided instructions from the Inquirer prompts.
- To exit the application, choose `EXIT` from the list of task choices.

## Visuals

## Tests

N/A

## Credits

Table schema structure provided by edX Boot Camps LLC.

## References

- Express.js Documentation https://expressjs.com/
- UUID Npm Package https://www.npmjs.com/package/uuid

## License

This project is covered under MIT License

<details>
  <summary>
    License Text
  </summary>

```

Copyright (c) 2024  Ian Hart

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

```

</details>

## Contributing

No contributions are being accepted at this time.

## Badges

[![GitHub license](https://img.shields.io/github/license/ianahart/employee-tracker)](https://github.com/ianahart/employee-tracker/blob/main/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/ianahart/employee-tracker)](https://github.com/ianahart/employee-tracker/issues)
[![GitHub stars](https://img.shields.io/github/stars/ianahart/employee-tracker)](https://github.com/ianahart/employee-tracker/stargazers)

## Questions

- Get in touch with me through [email](mailto:ianalexhart@gmail.com).
- Check out my GitHub [profile](https://github.com/ianahart).
