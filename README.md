## HNG_Stage_Two Backend - Build a simple REST API capable of CRUD Operations on a "person" resource

# NodeJs Express MongoDB CRUD API

This ia a simple REST API capable of CRUD on a "person" resource

## REQUIREMENTS

- **Functional REST API:** The API should successfully perform all CRUD operations.
- **Modelling Diagrams:** Clear and accurate UML and E-R diagrams should be provided.
- **Effective Testing Script:** The script should successfully test all the CRUD operations without manual intervention.
- **Dynamic Parameter Handling:** The API should correctly handle and respond to different parameters provided.
- **GitHub Repository:** Repository should be well-organized, contain all necessary files, and be publicly accessible.
- **Detailed Documentation:** Documentation should provide clear guidance on how to use the API, including setup, request/response formats, and sample usage.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- IDE- Vscode or any suitable.
- Node.js and npm installed.
- MongoDB installed and running.
- Postman or a similar tool for API testing.

## Instalation

1. Clone the repository:
> git clone https://github.com/Jennifer-tech/HNG_Stage_Two.git
2. Change to the project directory:
> cd your-repo
3. Install dependencies:
> npm install

## Create Environment Variables

- create a .env file in the root directory of your project and add the following environment variables:

> MONGODB_URI_offline=your_MONGODB_URI_offline_here

> PORT= ? your_desired_port_here```

## API Endpoints

- Create a person: ```POST /api/create```
- Get details of a person by Name: ```GET /api/:name```
- Update details of an existing person by Name: ```PATCH /api/:name```
- Remove a person by Name: ```DELETE /api/:name```
 
## Testing

Use Postman or your preferred API testing tool to test the CRUD operations. Below is a sample Postman collection you can import: Postman Collection.

[Render Live](https://muofunanya-hng-stage-two-task.onrender.com)

## Documentation

[Postman Docs](https://documenter.getpostman.com/view/25926313/2s9YC5zYYA)

## UML Diagram

[Uml diagram](https://dbdiagram.io/d/Muofunanya-hng-task2-UML-diagram-6503413102bd1c4a5e977078)