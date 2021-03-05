//Importamos express
const express = require("express");

//Usamos el método router de express
router = express.Router();

//Le indicamos la ruta a seguir al controlador
usersRoute = require("../controllers/usersControllers");

router.get("/",usersRoute.usersControllers); 

module.exports = router;  