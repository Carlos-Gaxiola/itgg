const express = require("express");
const app = express();
//const usersRoute = require("../routes/usersRoute");
const myConn = require('express-myconnection');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors()); 

//Para poder comunicarle los json del frontend al server
app.use(express.json());

//app.use("/users/", usersRoute);

app.listen(3001, () => {
    console.log("Express server está corriendo en port 3001");
})

//Middleware
const db =mysql.createConnection( {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'itgg',
    port: '3306'
});

app.post('/createAviso', (req, res) => {
    const titulo = req.body.titulo;
    const descripcion = req.body.descripcion;
    const fecha = req.body.fecha;

    db.query('INSERT INTO avisos (titulo,descripcion,fecha) VALUES (?,?,?)',
     [titulo, descripcion, fecha],
     (err,result)=>{
         if(err){
             console.log(err);
         }else{
             res.send("Values inserted");
         }
     });


})

app.get('/getAvisos',(req,res) =>{
    db.query('SELECT * FROM avisos', (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
})

//app.use(myConn(mysql, conn, 'single'));