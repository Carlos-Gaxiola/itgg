const express = require("express");
const app = express();
const usersRoute = require("./routes/usersRoute");
const myConn = require('express-myconnection');
const mysql = require('mysql');
const bodyParser = require('body-parser');

app.use("/users/",usersRoute);

app.listen(3001, ()=>{
    console.log("Express server está corriendo en port 3001");
})

//Middleware
const conn = {
    host:'localhost',
    user:'root',
    password:'root',
    database:'itg',
    port: '3306'
};

app.use(myConn(mysql, conn, 'single'));