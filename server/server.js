const express = require("express");
const app = express();
//const usersRoute = require("../routes/usersRoute");
const moment = require('moment')
const myConn = require('express-myconnection');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const { createTokens, validateToken } = require('./JWT')
var fs = require('fs');
const nodemailer = require('nodemailer')
const sendgridTransport = require("nodemailer-sendgrid-transport");
//const apiKey = "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";
const crypto = require('crypto');
const transporter = nodemailer.createTransport(sendgridTransport({
    auth: {
        api_key: "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"
    }
}))

app.use(fileUpload());

app.use(cookieParser());

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));

//Para poder comunicarle los json del frontend al server
app.use(express.json());

//app.use("/users/", usersRoute);

app.listen(3001, () => {
    console.log("Express server está corriendo en port 3001");
})

//Middleware
const db = mysql.createConnection({
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
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values inserted");
            }
        });


})

app.post('/createOfertaAcademica', (req, res) => {
    const licenciatura = req.body.licenciatura;
    const codigo = req.body.codigo;
    const objetivo = req.body.objetivo;
    const perfil = req.body.perfil;
    const file = req.body.file;

    db.query('INSERT INTO ofertaacademica (licenciatura,codigo,objetivo,perfil,file) VALUES (?,?,?,?,?)',
        [licenciatura, codigo, objetivo, perfil, file],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values inserted");
            }
        });


})

app.post('/createCarousell', (req, res) => {
    const file = req.body.file;

    db.query('INSERT INTO carousell (file) VALUES (?)',
        [file],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values inserted");
            }
        });


})


//Upload endpoint
app.post('/uploads', (req, res) => {
    const file = req.files.file;
    if ('replaceAll' in String.prototype) {
        const fileN = file.name.replaceAll(" ", "-")
    } else {
        String.prototype.replaceAll = function (find, replace) {
            let exp = new RegExp(find, 'g');
            return this.replace(exp, replace);
        };
    }
    const fileN = file.name.replaceAll(" ", "-")
    const filePath = "/uploads/" + fileN
    var exist = false;

    db.query('SELECT file FROM avisos', (err, result) => {
        result.map((val) => {
            if (val.file === filePath) {
                exist = true;
            }
        })
        if (exist) {
            res.json({ fileName: file.name, filePath: filePath })
        }
        else {
            if (req.files === null) {
                return res.status(400).json({ msg: 'Ningún archivo fue subido' });

            }


            file.mv(`${__dirname}/.././frontend/public/uploads/${fileN}`, err => {
                if (err) {
                    console.error(err);
                    return res.status(500).send(err);
                }
                res.json({ fileName: file.name, filePath: filePath })
            })
        }
    })


})

app.post('/uploads-carrera', (req, res) => {
    const file = req.files.file;
    if ('replaceAll' in String.prototype) {
        const fileN = file.name.replaceAll(" ", "-")
    } else {
        String.prototype.replaceAll = function (find, replace) {
            let exp = new RegExp(find, 'g');
            return this.replace(exp, replace);
        };
    }
    const fileN = file.name.replaceAll(" ", "-")
    const filePath = "/uploads-carreras/" + fileN
    var exist = false;

    db.query('SELECT file FROM ofertaacademica', (err, result) => {
        result.map((val) => {
            if (val.file === filePath) {
                exist = true;
            }
        })
        if (exist) {
            res.json({ fileName: file.name, filePath: filePath })
        }
        else {
            if (req.files === null) {
                return res.status(400).json({ msg: 'Ningún archivo fue subido' });

            }


            file.mv(`${__dirname}/.././frontend/public/uploads-carreras/${fileN}`, err => {
                if (err) {
                    console.error(err);
                    return res.status(500).send(err);
                }
                res.json({ fileName: file.name, filePath: filePath })
            })
        }
    })


})

app.post('/uploads-carousell', (req, res) => {
    const file = req.files.file;
    if ('replaceAll' in String.prototype) {
        const fileN = file.name.replaceAll(" ", "-")
    } else {
        String.prototype.replaceAll = function (find, replace) {
            let exp = new RegExp(find, 'g');
            return this.replace(exp, replace);
        };
    }
    const fileN = file.name.replaceAll(" ", "-")
    const filePath = "/uploads-carousell/" + fileN
    var exist = false;

    db.query('SELECT file FROM carousell', (err, result) => {
        result.map((val) => {
            if (val.file === filePath) {
                exist = true;
            }
        })
        if (exist) {
            res.json({ fileName: file.name, filePath: filePath })
        }
        else {
            if (req.files === null) {
                return res.status(400).json({ msg: 'Ningún archivo fue subido' });

            }


            file.mv(`${__dirname}/.././frontend/public/uploads-carousell/${fileN}`, err => {
                if (err) {
                    console.error(err);
                    return res.status(500).send(err);
                }
                res.json({ fileName: file.name, filePath: filePath })
            })
        }
    })


})



app.get('/getAvisos', (req, res) => {
    db.query('SELECT * FROM avisos ORDER BY id DESC', (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

app.get('/getCarreras', (req, res) => {
    db.query('SELECT id,licenciatura FROM ofertaacademica', (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

app.get('/getOfertaAcademica/:id', (req, res) => {
    const query = 'SELECT * FROM ofertaacademica WHERE id = ?';
    db.query(query, req.params.id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

app.get('/getCarousell', (req, res) => {
    db.query('SELECT id, file FROM carousell', (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

app.get('/deleteCarousell/:id', (req, res) => {
    const qFile = "SELECT file FROM carousell WHERE id = ?"
    db.query(qFile, req.params.id, (err, resultFile) => {
        fs.unlinkSync(`${__dirname}/.././frontend/public${resultFile[0].file}`)
    })
    const query = 'DELETE FROM carousell WHERE id = ?';
    db.query(query, req.params.id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

app.get('/getDatosAviso/:id', (req, res) => {
    const query = 'SELECT * FROM avisos WHERE id = ?';
    db.query(query, req.params.id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

app.post('/uploads-editDel/:id', (req, res) => {
    const query = 'SELECT file FROM avisos WHERE id = ?'
    db.query(query, req.params.id, (err, result) => {
        if (result[0].file != "") {
            const query2 = 'SELECT count(*) AS count FROM avisos WHERE file = ?'
            db.query(query2, result[0].file, (err, result2) => {
                if (result2[0].count < 2) {
                    fs.unlinkSync(`${__dirname}/.././frontend/public${result[0].file}`)
                    res.json({ filePath: "" })
                } else {
                    res.json({ filePath: "" })
                }
            })
        } else {
            res.json({ filePath: "" })
        }
    })
})

app.post('/uploads-edit/:id', (req, res) => {
    const file = req.files.file;
    if ('replaceAll' in String.prototype) {
        const fileN = file.name.replaceAll(" ", "-")
    } else {
        String.prototype.replaceAll = function (find, replace) {
            let exp = new RegExp(find, 'g');
            return this.replace(exp, replace);
        };
    }
    const fileN = file.name.replaceAll(" ", "-")
    const filePath = "/uploads/" + fileN
    var exist = false;

    const query = 'SELECT file FROM avisos'
    db.query(query, (err, result) => {
        const query2 = 'SELECT file FROM avisos WHERE id = ? LIMIT 1'
        db.query(query2, req.params.id, (err, result2) => {
            result.map((val) => {
                if (val.file === filePath) {
                    exist = true;
                }
            })
            if (exist) {
                const queryCount = 'SELECT count(*) AS count FROM avisos WHERE file = ?'
                db.query(queryCount, result2[0].file, (err, resultCount) => {
                    if (resultCount[0].count == 1 && result2[0].file != "" && result2[0].file != filePath) {
                        fs.unlinkSync(`${__dirname}/.././frontend/public${result2[0].file}`)
                    }
                })
                res.json({ fileName: file.name, filePath: filePath })
            }
            else {
                if (result2[0].file != "") {
                    const query3 = 'SELECT count(*) AS count FROM avisos WHERE file = ?'
                    db.query(query3, result2[0].file, (err, result3) => {
                        if (result3[0].count == 1 && result2[0].file != "") {
                            fs.unlinkSync(`${__dirname}/.././frontend/public${result2[0].file}`)
                        }
                    })
                }

                file.mv(`${__dirname}/.././frontend/public/uploads/${fileN}`, err => {
                    if (err) {
                        console.error(err);
                        return res.status(500).send(err);
                    }
                    res.json({ fileName: file.name, filePath: filePath })
                })
            }
        })
    })
})

app.post('/editAviso', (req, res) => {
    const id = req.body.id
    const titulo = req.body.titulo
    const descripcion = req.body.descripcion
    const file = req.body.file
    const query = 'UPDATE avisos SET titulo = ?, descripcion = ?, file = ? WHERE id = ?';
    db.query(query, [titulo, descripcion, file, id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

app.get('/deleteAviso/:id', (req, res) => {
    const query = 'DELETE FROM avisos WHERE id = ?';
    db.query(query, req.params.id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

app.get('/getDatosCarrera/:id', (req, res) => {
    const query = 'SELECT * FROM ofertaacademica WHERE id = ?';
    db.query(query, req.params.id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

app.post('/uploads-carreras-editDel/:id', (req, res) => {
    const query = 'SELECT file FROM ofertaacademica WHERE id = ?'
    db.query(query, req.params.id, (err, result) => {
        if (result[0].file != "") {
            const query2 = 'SELECT count(*) AS count FROM ofertaacademica WHERE file = ?'
            db.query(query2, result[0].file, (err, result2) => {
                if (result2[0].count < 2) {
                    fs.unlinkSync(`${__dirname}/.././frontend/public${result[0].file}`)
                    res.json({ filePath: "" })
                } else {
                    res.json({ filePath: "" })
                }
            })
        } else {
            res.json({ filePath: "" })
        }
    })
})

app.post('/uploads-carreras-edit/:id', (req, res) => {
    const file = req.files.file;
    if ('replaceAll' in String.prototype) {
        const fileN = file.name.replaceAll(" ", "-")
    } else {
        String.prototype.replaceAll = function (find, replace) {
            let exp = new RegExp(find, 'g');
            return this.replace(exp, replace);
        };
    }
    const fileN = file.name.replaceAll(" ", "-")
    const filePath = "/uploads-carreras/" + fileN
    var exist = false;

    const query = 'SELECT file FROM ofertaacademica'
    db.query(query, (err, result) => {
        const query2 = 'SELECT file FROM ofertaacademica WHERE id = ? LIMIT 1'
        db.query(query2, req.params.id, (err, result2) => {
            result.map((val) => {
                if (val.file === filePath) {
                    exist = true;
                }
            })
            if (exist) {
                const queryCount = 'SELECT count(*) AS count FROM ofertaacademica WHERE file = ?'
                db.query(queryCount, result2[0].file, (err, resultCount) => {
                    if (resultCount[0].count == 1 && result2[0].file != "" && result2[0].file != filePath) {
                        fs.unlinkSync(`${__dirname}/.././frontend/public${result2[0].file}`)
                    }
                })
                res.json({ fileName: file.name, filePath: filePath })
            }
            else {
                if (result2[0].file != "") {
                    const query3 = 'SELECT count(*) AS count FROM ofertaacademica WHERE file = ?'
                    db.query(query3, result2[0].file, (err, result3) => {
                        if (result3[0].count == 1 && result2[0].file != "") {
                            fs.unlinkSync(`${__dirname}/.././frontend/public${result2[0].file}`)
                        }
                    })
                }

                file.mv(`${__dirname}/.././frontend/public/uploads-carreras/${fileN}`, err => {
                    if (err) {
                        console.error(err);
                        return res.status(500).send(err);
                    }
                    res.json({ fileName: file.name, filePath: filePath })
                })
            }
        })
    })
})

app.post('/editCarrera', (req, res) => {
    const id = req.body.id
    const licenciatura = req.body.licenciatura
    const codigo = req.body.codigo
    const objetivo = req.body.objetivo
    const perfil = req.body.perfil
    const file = req.body.file
    const query = 'UPDATE ofertaacademica SET licenciatura = ?, codigo = ?, objetivo = ?, perfil = ?, file = ? WHERE id = ?';
    db.query(query, [licenciatura, codigo, objetivo, perfil, file, id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

app.get('/deleteCarrera/:id', (req, res) => {
    const query = 'DELETE FROM ofertaacademica WHERE id = ?';
    db.query(query, req.params.id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})


//Registro de usuarios en la base de datos
app.post('/registrar', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const role = req.body.role;


    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            console.log(err)
        }

        db.query(
            "INSERT INTO usuarios(email,password,role) VALUES (?,?,?)",
            [email, hash, role],
            (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    transporter.sendMail({
                        to: 'carlinos1212@gmail.com',
                        from: 'arcadioramosisw@gmail.com',
                        subject: 'Registro completado con éxito',
                        html: '<h1>Usted se ha registrado</h1>'
                    })
                    res.json({ mensaje: "todo salió bien" });
                }
            }
        );
    })


});

//No borrar funciona al cien
app.get('/getToken', (req, res) => {
    const token = req.cookies['access-token'];
    jwt.verify(token, 'jwtsecretplschange', (err, authData) => {
        if (err) {
            res.json({
                mensaje: "no estás autorizado",
                authorized: false
            })
        } else {
            req.authData = authData;
            res.json({
                mensaje: "validado",
                authorized: true,
                authData
            })
        }
    })

})


app.post('/checkEmailDuplicated', async (req, res) => {
    const email = req.body.email;
    
    await db.query('SELECT * FROM usuarios where email = ?',
        email,
        (err, result) => {
            if (err) {
                res.send({err})
            }
            if (result.length > 0) {
                const user = result[0];
                res.json({
                    user,
                    duplicated: true,
                    mensaje: "El correo está en uso"
                })
               
            }else{
                res.json({
                    mensaje: "El correo no está en uso",
                    duplicated: false
                })
            }
        })
})

//Login 
app.post('/login', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;


    await db.query('SELECT * FROM usuarios WHERE email = ?;',
        email,
        (err, result) => {

            if (err) {
                res.send({ err: err });

            }

            if (result.length > 0) {
                bcrypt.compare(password, result[0].password, (error, response) => {

                    if (response) {
                        const user = result[0];
                        const accessToken = createTokens(user);


                        res.cookie("access-token", accessToken, {
                            maxAge: 60 * 60 * 24 * 1000 * 1,
                            httpOnly: true
                        }).json({
                            mensaje: "correcto inicio de sesión",
                            user: user,
                            auth: true
                        });




                    } else {
                        res.json({
                            auth: false,
                            mensaje: "Contraseña incorrecta"
                        });
                    }
                })
            } else {
                res.json({ auth: false, mensaje: "El usuario ingresado(correo electrónico) no existe" })

            }

        }
    )
})

app.post('/reset-password', async (req, res) => {
    await crypto.randomBytes(32, async (err, buffer) => {
        if (err) {
            console.log(err)
        }
        const fechaFea = Date.now() + 1800000
        const fechaBuena = moment(fechaFea).format();
        const resetToken = buffer.toString('hex');
        //El token sólo será válido por 30 minutos
        const expireToken = fechaBuena;
        const email = req.body.email;
        await db.query('SELECT * FROM usuarios WHERE email =?;',
            email, async (err, result) => {
                if (err) {
                    res.send(err)
                }
                if (result.length > 0) {
                    const query = 'UPDATE usuarios SET resetToken = ?, expireToken = ? WHERE email = ? LIMIT 1';
                    await db.query(query, [resetToken, expireToken, email], (err, result) => {
                        if (err) {
                            res.json({
                                err,
                                expireToken
                            })
                        } else {
                            transporter.sendMail({
                                to: email,
                                from: 'arcadioramosisw@gmail.com',
                                subject: 'Re asignación de contraseña',
                                html: `
                                <p>Haga click en el siguiente link para <a href="http://localhost:3000/reset/${resetToken}">reestablecer contraseña</a></p>
                                `

                            })
                            res.json({
                                mensaje: 'El correo de actualización de contraseña ha sido enviado, verifique su bandeja de correos',
                                result
                            })
                        }

                    })
                } else {
                    res.json({
                        mensaje: 'El usuario no existe/ el correo ingresado no existe',
                        email: email,
                        tipo: "ando acá",
                        result

                    })
                }
            })


    })

})

app.post('/newPassword', async (req, res) => {
    const password = req.body.password;
    const token = req.body.token;
    await db.query('SELECT * FROM usuarios WHERE resetToken =? LIMIT 1;',
        token, async (err, result) => {
            if (err) {
                res.json({
                    err: err
                })
            }
            const expireToken = result[0].expireToken;
            const fechaAhorita = Date.now();
            const fechaAhoritaa = moment(fechaAhorita).format();
            const parseadoToken = Date.parse(expireToken);
            const parseadoFechaAhorita = Date.parse(fechaAhoritaa);
            const parseadoFechaAhoritaa =  moment(parseadoFechaAhorita).format();



            if (result.length > 0) {
                await bcrypt.hash(password, saltRounds, async (err, hash) => {
                    if (err) {
                        res.json({
                            err: err,
                            mensaje: "Hubo un error en el hasheo"
                        })
                    }
                    
                    if (parseadoToken > parseadoFechaAhorita) {
                        const query = 'UPDATE usuarios SET password = ? WHERE resetToken = ? AND expireToken >' + "'" + parseadoFechaAhoritaa + "'";
                        await db.query(query, [hash, token], (err, result) => {
                            if (err) {
                                console.log(err);
                                res.json({
                                    err,
                                    mensaje: 'error en la actualización de contraseña'
                                })
                            } else {
                                res.json({
                                    mensaje: "La actualización de contraseña fue un éxito"
                                })
                            }

                        })
                    } else {
                        res.json({
                            mensaje: 'La contraseña no se pudo cambiar porque el link de actualización de contraseña expiró'
                        })
                    }
                })
            }
        })
})



//app.use(myConn(mysql, conn, 'single'));