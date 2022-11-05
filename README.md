# E-commerce-back-end

[E-commerce-back-end Video](https://youtu.be/fTGmxTpIihM)

## Table of Contents
- [Description](#description)
- [Tech used](#tech-used)
- [Use](#use)
- [Learning point](#learning-point)
- [Link](#link)
- [License](#license)


## Description
This uses Node.js - Sequelize package and MySQL2 to set up database models and API routes that is required. After synced the server and schema.sql, use Insomnia to test API GET, POST, PUT and DELETE routes.


## Tech used
- JavaScript
- Node.js - sequlize package & dotenv package
- MySQL
- Insomnia
- Screencastify
- GitHub
- Terminal
- Visual Studio Code

## Use
- Step 1: Open terminal.
- Step 2: Insert command as following for db folder
```
mysql -u root -p
Enter password: password
mysql> source schema.sql
quit
cd ..
```
- Step 3: Then back to e-commerce-back-end folder, insert command as following
```
npm run seed
npm start
```
- Step 4: Open Insomnia to test API GET, POST, PUT and DELETE routes.


## Learning point
- I learn how to use sequelize to set up database models.
- I learn how to use Insomnia to test API routes.
- I learn how to use the dotenv package to store sensitive data.


## Link
https://yingyliu.github.io/e-commerce-back-end/


## License
[![license](https://img.shields.io/badge/license-MIT-blue)](https://shields.io)