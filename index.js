const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(express.json());
app.use(cors());

const con = mysql.createConnection({
    host: "sql12.freesqldatabase.com", // Corrected: no trailing spaces
    user: "sql12754019",
    password: "nMIUkfg9X9",
    database: "sql12754019"
});

app.post("/ss", (req, res) => {
    let sql = "insert into student2 value(?,?,?)";
    let data = [req.body.rno, req.body.name, req.body.marks];
    con.query(sql, data, (err, result) => {
        if (err) res.send(err);
        else res.send(result);
    });
});

app.get("/gs", (req, res) => {
    let sql = "select * from student2";
    con.query(sql, (err, result) => {
        if (err) res.send(err);
        else res.send(result);
    });
});

app.put("/us", (req, res) => {
    let sql = "update student2 set name = ?, marks = ? where rno = ?";
    let data = [req.body.name, req.body.marks, req.body.rno];
    con.query(sql, data, (err, result) => {
        if (err) res.send(err);
        else res.send(result);
    });
});

app.delete("/ds/:rno", (req, res) => {
    let sql = "delete from student2 where rno = ?";
    let data = [req.params.rno]; // Retrieve rno from the URL
    con.query(sql, data, (err, result) => {
        if (err) 
            res.send(err);
        else 
            res.send(result);
    });
});

app.listen(9000, () => {
    console.log("Ready to serve @ 9000");
});
