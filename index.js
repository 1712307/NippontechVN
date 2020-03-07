var express = require("express");
var app = express();
require("dotenv").config();
let port=process.env.PORT||3000;


app.listen(port);

app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('./public'));
//app.use(express.static('./views'))

app.get("/",function(req,res)
{
    res.render('home');
});
app.get("/lemure-series",function(req,res)
{
    res.render('lemure-series');
});
app.get("/edel-series",function(req,res)
{
    res.render('edel-series');
});
app.get("/treasia-series",function(req,res)
{
    res.render('treasia-series');
});
app.get("/phu-kien-tu-bep",function(req,res)
{
    res.render('phu-kien-tu-bep');
});
app.get("/he-tu-bep",function(req,res)
{
    res.render('he-tu-bep');
});

app.get("/he-tu-guong",function(req,res)
{
    res.render('he-tu-guong');
});
