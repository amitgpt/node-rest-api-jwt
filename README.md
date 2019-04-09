# Building REST API with Node, JWT(Json Web Token) and Express

## RESTful API endpoints

## POST `/api/register`
Register.

+ Method: `POST`
+ URL: `/api/register`
+ Body:

`
{ "name":"Test", "email":"test123@mailinator.com", "password":"test@123"}`


## POST `/api/login`
Login.

+ Method: `POST`
+ URL: `/api/login`
+ Body:

`
{ "email":"test123@mailinator.com", "password":"test@123"}`

## POST `/api/changepassword`
Change Password.

+ Method: `POST`
+ URL: `/api/changepassword`
+ Body:

`
{ "password":"test123", "token":"token"}`


## Install

	npm install


# Run
0. Make sure MongoDB is running.
1. `nodemon server.js OR node server.js` 
