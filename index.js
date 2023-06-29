//general and route specific middlewares

const express = require('express');
const server = express()

//request handling methods 
const handleAllTypesOfRequests =(req,res) =>{
    res.send('welcome to profile')
}
const handleProfilePutRequestType =(req,res) =>{
    res.send('profile put request type')
}
const handleLoginGetRequest = (req, res) =>{
    res.send('hello, this na login page')
}
const handleHomeGetRequest =(req,res) =>{
    res.send('homepage dis')
}

// example of general middleware
const middlewarefunction = (req, res, next) => {
    console.log(req)
    //console.log('this is the middleware');
     //make some checks
    // res.send ('this is middleware response')
     
    next();
}

//route specific middleware
const loginRouteSpecificMiddleware =(req,res,next) =>{
    console.log('login route specific middleware executed')
    next();
}

//middleware
//server.use(middlewarefunction);

//routes
server.post('/profile', handleAllTypesOfRequests )
server.get('/login',loginRouteSpecificMiddleware, handleLoginGetRequest)
server.put('/profile', handleProfilePutRequestType)
server.post('/signup', handleHomeGetRequest)
server.get('/',(req,res) => res.send('from signup for get method'))


server.listen(3000, () => console.log('server is ready'))

//with middlewares, create a function for the middleware
//add next as a parameter and function()
//create a server.use route then pass the middleware to the target route
//same for route specific middleware