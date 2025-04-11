const {getAllUsers, addUser} = require("../models/users");

const express = require('express');
const router = express.Router();

router.get("/users", (req, res) => {
    res.json(getAllUsers());
});

function escapeHtmlText (value) {
    const stringValue = value.toString()
    const entityMap = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '/': '&#x2F;',
        '`': '&grave;',
        '=': '&#x3D;'
    }
    const regex = /[&<>"'`=/]/g
    return stringValue.replace(regex, match => entityMap[match])
}

router.post("/users", (req, res) => {
    const nombre = req.body.nombre;
    const pass = req.body.pass;
    addUser(nombre, pass);
    res.send("Usuario añadido")
});


module.exports = router;