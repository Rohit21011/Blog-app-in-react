const express=require("express");
const app =express();
 const bodyParser=require("body-parser");
const cors=require("cors");
 const { urlencoded } = require("body-parser");
app.use(cors());
app.use(express.json());  
app.use(bodyParser.urlencoded({extended:true}));

var mysql = require('mysql');


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"blogapp"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

});

app.post("/",(req,res)=>{
    const {type,title,description}=req.body;
    
    const sql="INSERT INTO create_blog(id,type,title,description) VALUES ('',?,?,?)";
    con.query(sql,[type,title,description],function(err,result){
      if(err){
        console.log(err)
      }
      console.log(result);
      res.send(result);
    })
  })
  app.get("/fetch_all",(req,res)=>{
    const sql="SELECT * from create_blog";
    con.query(sql,function(err,result){
      if(err){
        console.log(err)
      }
      console.log(result);
      res.send(result);
    })
  })
  app.post("/fetch_by_category",(req,res)=>{
    const {type}=req.body;
   
    const sql="SELECT * from create_blog   WHERE type=?";
    con.query(sql,[type],function(err,result){
      if(err){
        console.log(err)
      }
      console.log(result);
      res.send(result);
    })
  })
  app.post("/Search",(req,res)=>{
    const {text_search}=req.body;
   
    const sql="SELECT * from create_blog   WHERE type LIKE %?%";
    con.query(sql,[text_search],function(err,result){
      if(err){
        console.log(err)
      }
      console.log(result);
      res.send(result);
    })
  })
  app.listen(4000,()=>{
      console.log("server is running");
  }) 
