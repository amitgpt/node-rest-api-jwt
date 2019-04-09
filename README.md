# Building REST API with Node, JWT(Json Web Token) and Express

## RESTful API endpoints

## GET `/api/register
Login.

+ Method: `POST`
+ URL: `/api/register`
+ Body:

`
{ "name":"Test", "email":"test123@mailinator.com", "password":"test@123"}`


## GET `/api/login`
Login.

+ Method: `POST`
+ URL: `/api/login`
+ Body:

`
{ "email":"test123@mailinator.com", "password":"test@123"}`


## Install

	npm install


# Run
0. Make sure MongoDB is running.
1. `nodemon server.js OR node server.js` 
