
# NodeJS-Express Server

This project structure is for building Express server on top of / with RESTful APIs and microservices using Node.js, Docker support. It is designed to be scalable on containerized environment like Kubernetes, and designed to be enterprise ready. 

The principle of the project structure is isolation, so multiple developers can work on the same project without high dependency.

## Technology Stack

 1. **ExpressJS** with vanilla javascript.
 3. **Mocha & Chai** for testing
 4. **ESLint** with **Airbnb preset/ruleset**
 5. **Docker** support
 6. **dotenv** to load environment variables from .env 
 7. **Compression** for Gzip response compression
 8. **Winston** for Logging
 
 ## Requirements
 
 1. **Node LTS 10.x**
 2. **Docker**
 3. **Npm**
 
## Project/Folder Strcture
### /
	Root of the project
- ***package.json***
	- Entry point for node app with `npm` configurations for dependent packages and scripts.
- ***bin***
	- This folder holds single point of start for ther server. 
	- `www` file is executable file with `node` and include code which is reposnsible for creating ***http*** server with desirable port and other preconfigure applications (express and apollo server) to be run on top of the ***http*** server.
- ***\__mocks\__***
	- This folder will hold al the `mocks` require in unit tests.
- ***\__tests\__***
	- This folder will have all the tests file for application for ***TDD***
- ***logs***
	- All logs generated using `winston` module will go in this folder. Bydefault daily rotaional setting has been applied for application logs.
- ***server.js***
	- Server.js file is ***ExpressJS*** application server where express app is being created and configured.
	- This file is reposnible for setting up middlewares such as `apollo-server`, `cors`, `compression` etc. 
- ***.eslintrc***
	- This file is configuration endpoint for `eslint` any rules, presets, other lint configuration goes in this file. For this app `Airbnb` preset settings resides here.
- ***Dockerfile***
	-  The `Dockerfile` is essentially the build instructions to build the image with `node` as base image.
- ***.env***
	- A file containing all the enviroment variables to be used in application using `dotenv` package.

### src/
	This folder is where all application code is structured. 
 - ***app.js***
	- `app` is apollo server with preconfigure typedefs and resolver. This file is single entry point for apollo server where all the other configuration can be set apart from typeDefs and resolvers etc.
 - ***controller***
	 This folder will hold all controllers of project strcutured in folder with name of controllers
	
	- *`index.js`*  file is entry point from which all controller gets initiated.
 - ***lib***
	- `lib` is where libraries by the original author of the project are located. This should hold all reusable libraries which are used in project.
 - ***helper***
	- `helper` will hold all the resuable project doamain related helper code.
 - ***constant***
	- All the constants including string, variables, etc used in project will be structured in this folder.
 - ***config***
	- All the project configurations common for project such as db url etc will be stored in this folder.
 - ***adapter*** or ***db***		 
	
	 - If your project has `interfaces` which will communicate with other parties that can collectively structure here. Or `db` communications for the project can be strctured in this folder
 - ***abstratction***
	 - All abstarct classes require for the project can go in this folder.
## Getting Started

Install:

    npm install
### Running Locally

    npm start
### Running Locally with Watch

    npm run start:dev
### Running in Production

    npm run start:production
### Lint

    npm run lint
### Test
 

    npm test
### Docker

    docker build -t <tag_name> .
    docker run --name <project_name> -p 5000:5000 <tag_name>
### Licence