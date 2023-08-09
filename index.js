const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
var z = "a";

const app = express();

app.use(express.json());


app.use(cors());

app.set('view engine','ejs');

const con = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "Soham2002@",
    database: "database2"
})

app.get('/data', (req, res) => {
  const sql = 'SELECT * FROM qrcode';
  con.query(sql, (err, result) => {
    if (err) {
      res.send({ error: err });
    } else {
      res.send(result);
      console.log(result);
    }
  });
});

app.get('/users', (req, res) => {
  const sql = 'SELECT * FROM registration_data';
  con.query(sql, (err, result) => {
    if (err) {
      res.send({ error: err });
    } else {
      res.send(result);
      console.log(result);
    }
  });
});


app.post("/login", (req, res) => {
  const Name = req.body.Name;
  z= Name;
  const Password = req.body.Password;
  con.query("SELECT * FROM registration_data WHERE Name = ? AND password = ?", [Name, Password], 
      (err, result) => {
          if(err){
              req.setEncoding({err: err});
          }else{
              if(result.length > 0){
                  res.send(result);
              }else{
                  res.send({message: "WRONG USERNAME OR PASSWORD!"})
              }
          }
      }
  )
})

app.post("/adminlogin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  con.query("SELECT * FROM admin WHERE username = ? AND password = ?", [username, password], 
      (err, result) => {
          if(err){
              req.setEncoding({err: err});
          }else{
              if(result.length > 0){
                  res.send(result);
              }else{
                  res.send({message: "WRONG USERNAME OR PASSWORD!"})
              }
          }
      }
  )
})

app.post('/signup', (req, res) => {
  const Name = req.body.Name;
  const Password = req.body.Password;
  const Vehicle_Type = req.body.Vehicle_Type;
  const Phone_number = req.body.Phone_number;
  const Vehicle_Number = req.body.Vehicle_Number;

  con.query("INSERT INTO registration_data (Name, Password ,Vehicle_Type ,Phone_number ,Vehicle_Number) VALUES (?, ? , ?, ?, ?)", [Name, Password , Vehicle_Type , Phone_number , Vehicle_Number], 
      (err, result) => {
          if(result){
              res.send(result);
          }else{
              res.send({message: "ENTER CORRECT ASKED DETAILS!"})
          }
      }
  )
})




app.get('/userprofile', (req, res) => {
  const sql = 'SELECT * FROM registration_data WHERE Name = ?';
  con.query(sql,z,(err, result) => {
    if (err) {
      res.send({ error: err });
    } else {
      res.send(result);
      console.log(result);
    }
  });
});

app.get('/userprofiles', (req, res) => {
  const sql = 'SELECT * FROM qrcode WHERE name = ?';
  con.query(sql,z,(err, result) => {
    if (err) {
      res.send({ error: err });
    } else {
      res.send(result);
      console.log(result);
    }
  });
});


app.get('/row', (req, res) => {
  const sql = 'SELECT * , COUNT (*) as rcount FROM qrcode LIMIT 1';
  con.query(sql, (err, result) => {
    if (err) {
      res.send({ error: err });
    } else {
      res.send(result);
      console.log(result);
    }
  });
});


app.listen(3001, () => {
    console.log("running backend server");
})