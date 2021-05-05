const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

/* const multer = require('multer');
const fileUpoad = require('express-fileupload'); */


//Show add product to database
//const routes = require('./route');
//const fileUpload = require('express-fileupload');

app.use(cors());
app.use(express.json());
//app.use(fileUpload());

/* app.post('/upload', (req, res) => {
    if(req.files === null) {
        return res.status(400).json({ msg: 'No file uploaded'});
    }

    const file = req.files.file;

    file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
        if (err) {
            console.error(err);
            return res.status(500).send(err);
        }
        res.json({ fileName: file.name, filePath: `/uploads/${file.name}`});
    });
}); */

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

app.post('/create', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const country = req.body.country;
    const position = req.body.position;
    const wage = req.body.wage;

    db.query(
        "INSERT INTO employee (name, age, country, position, wage) VALUES(?,?,?,?,?)", 
    [name, age, country, position, wage],
    (err, result) => {
        if(err){
            console.log(err);
        }else {
            res.send("Values inserted");
        }
    }
    );
});

app.listen('3001', () => {
    console.log("Server is running on port 3001");
})