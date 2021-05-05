const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

//Show add product to database
//const routes = require('./route');
//const fileUpload = require('express-fileupload');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "checkbrew",
    host: "se.mfu.ac.th",
    password: "Ch3kBR3VV",
    database: "sp_checkbrew_db"
})

app.get('/employee', (req, res) => {
    db.query("SELECT * FROM employee", (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.get('/product', (req, res) => {
    db.query("SELECT * FROM product", (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.get('/staff', (req, res) => {
    db.query("SELECT * FROM staff", (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.listen('3001', () => {
    console.log("Server is running on port 3001");
})