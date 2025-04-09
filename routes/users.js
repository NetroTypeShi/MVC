const {getAllUsers, addUser} = require("../models/users");

const express = require('express');
const router = express.Router();

router.get("/users", (req, res) => {
    res.json(getAllUsers());
});

router.post("/users", (req, res) => {
    const nombre = req.body.nombre;
    const pass = req.body.pass;
    addUser(nombre, pass);
    res.send("Usuario añadido")
});
module.exports = router;