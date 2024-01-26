<h1 align = 'center'>
   MyTodos - MERN Stack Todo Application
</h1>
<div align = 'center'>
              
[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/check-it-out.svg)](https://forthebadge.com)

</div>

![image](https://github.com/Sourav928/MyTodos-MERN/assets/76393038/76bb9dd4-87d9-4878-aaf9-651ad9ed3cd4)

This is the repository for MyTodos app built using the powerful MERN (MongoDB, Express.js, React, Node.js) stack along with Redux and Redux Thunk, provides you with a seamless and efficient way to manage your todos.

## Table of Contents

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Configuration](#configuration)
4. [API Documentation](#api-documentation)

## Introduction

This is Todo application which can be used to track our daily task, build using MERN stack ,Redux Thunk and some other technologies.

## Installation

Install VS code or any IDE install nodejs and npm, create account on mongoDB atlas, Create react app using npm.

## Configuration

# Clone the repository

git clone https://github.com/Sourav928/MyTodos-MERN.git

# Install dependencies

cd project-folder
npm install
Configuration
Document any environment variables or configuration files that need to be set up before running the project.

 <h3>Libraries / Dependencies</h3>
 <ul>
    <li>react: A JavaScript library for building user interfaces.</li>
    <li>mongoose: An ODM (Object Data Modeling) library for MongoDB and Node.js. It simplifies interactions with MongoDB databases.</li>
    <li>express: A fast, unopinionated, minimalist web framework for Node.js.</li>
    <li>body-parser: Middleware to parse incoming request bodies in a middleware before your handlers, available under the req.body property.</li>
    <li>react-redux: The official React bindings for Redux, providing connect function and Provider component.</li>
    <li>axios: A promise-based HTTP client for making requests to the backend API.</li>
    <li>express: As mentioned above, used for building the server.</li>
    <li>dotenv: A zero-dependency module that loads environment variables from a .env file into process.env.</li>
   <li>redux:This line imports two essential functions from the Redux library: createStore and applyMiddleware.</li>
   <li>redux-thunk:Redux Thunk is middleware for Redux that allows you to write action creators that return a function instead of an action object.</li>
   <li>redux-dev-Tools:Redux DevTools Extension is a browser extension that allows you to inspect and debug your Redux state and actions.</li>
 </ul>

 <h3>Getting Started </h3>

Clone the repository:

```bash
# Get the latest snapshot
git clone https://github.com/Sourav928/gmailautoreplybot-using-Nodejs.git

# Install NPM dependencies
npm install dependencies

# Then simply start your app
npm start
```

## API Documentation

<b>Base URL: </b> 'https://localhost:300/'

<b>Endpoint 1: </b> <br>
URL: /todos <br>
Method: POST<br>
Description: Posting the todo to the database.<br>
Query Parameters: NA<br>
Response:<br>
200 OK: Description of successful response.<br>
500 Internal Server Error: Description of error response.<br>

<b>Endpoint 2: </b> <br>
URL: /todos<br>
Method: GET<br>
Description: Getting all the todos from the database.<br>
Query Parameters: NA<br>
Response:<br>
200 OK: Description of successful response.<br>
500 Internal Server Error: Description of error response.<br>

<b>Endpoint 3: </b> <br>
URL: /todos/:id<br>
Method: GET<br>
Description: To toggle the state of the element<br>
Parameters:<br>
id: Description of the resource ID (type, required).<br>
Response:<br>
200 OK: Description of successful response.<br>
500 Internal Server Error: Description of error response.<br>

<b>Endpoint 4: </b> <br>
URL: /todos/:id<br>
Method: DELETE<br>
Description: To delete the todo from the database.<br>
Parameters:<br>
id: Description of the resource ID (type, required).<br>
Response:<br>
200 OK: Description of successful response.<br>
500 Internal Server Error: Description of error response.<br>

<b>Endpoint 5: </b> <br>
URL: /todos/:id<br>
Method: PUT<br>
Description: To update the todo from the database.<br>
Parameters:<br>
id: Description of the resource ID (type, required).<br>
Response:<br>
200 OK: Description of successful response.<br>
500 Internal Server Error: Description of error response.<br>

## Build With

![Static Badge](https://img.shields.io/badge/MongoDB-%2347A248?style=plastic&logo=mongodb&labelColor=black)
![Static Badge](https://img.shields.io/badge/Express-%23000000?style=plastic&logo=express&labelColor=black)
![Static Badge](https://img.shields.io/badge/React-%2361DAFB?style=plastic&logo=react&labelColor=black)
![Static Badge](https://img.shields.io/badge/Nodejs-%23339933?style=plastic&logo=nodedotjs&labelColor=black)

<p align="center"> Made with ❤ by <a href="https://github.com/Prakhar2100">Sourav Khandekar</a></p>
