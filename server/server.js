const express = require("express");
const app = express();
//const usersRoute = require("../routes/usersRoute");
const myConn = require('express-myconnection');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');

app.use(fileUpload());

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
    password: 'root',
    database: 'itg',
    port: '3306'
});

//Posts
app.post('/createAviso', (req, res) => {
    const titulo = req.body.titulo;
    const descripcion = req.body.descripcion;
    const fecha = req.body.fecha;
    const file = req.body.file;

    db.query('INSERT INTO avisos (titulo,descripcion,fecha,file) VALUES (?,?,?,?)',
     [titulo, descripcion, fecha, file],
     (err,result)=>{
         if(err){
             console.log(err);
         }else{
             res.send("Values inserted");
         }
     });


})


//Upload endpoint
app.post('/uploads',(req,res)=>{
    if(req.files === null){
        return res.status(400).json({msg: 'Ningún archivo fue subido'});
            
    }

    const file = req.files.file;
    
    file.mv(`${__dirname}/.././frontend/public/uploads/${file.name}`,err =>{
        if(err){
            console.error(err);
            return res.status(500).send(err);
        }
        res.json({fileName: file.name , filePath: `/uploads/${file.name}`})
    })

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