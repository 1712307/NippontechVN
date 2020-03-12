var express = require("express");
var app = express();
require("dotenv").config();
let port=process.env.PORT||3000;


app.listen(port);

app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('./public'));
//app.use(express.static('./views'))

//Trang Chu
app.get("/",function(req,res)
{
    res.render('home');
});

//He Tu Bep
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

//He Tu Guong
app.get("/he-tu-guong",function(req,res)
{
    res.render('he-tu-guong');
});
app.get("/eleena-series",function(req,res)
{
    res.render('eleena-series');
});
app.get("/famile-series",function(req,res)
{
    res.render('famile-series');
});
app.get("/ondine-series",function(req,res)
{
    res.render('ondine-series');
});
app.get("/suria-series",function(req,res)
{
    res.render('suria-series');
});

//He Nha Tam
app.get("/he-nha-tam",function(req,res)
{
    res.render('he-nha-tam');
});

//Tam op tuong
app.get("/tam-op-tuong",function(req,res)
{
    res.render('tam-op-tuong');
});

//Quy trinh dat hang
app.get("/quy-trinh-dat-hang",function(req,res)
{
    res.render('quy-trinh-dat-hang');
});