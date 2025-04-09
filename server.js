const {getAllUsers, addUser} = require("./models/users");
const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended : true}));
app.use(express.static('public'));

const usersRouter = require("./routes/users")
app.use(usersRouter);

app.listen(3000, () => {
    console.log("Server en 3000");
})


console.log(getAllUsers())