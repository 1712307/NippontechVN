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
    res.render('./he-tu-bep/lemure-series');
});
app.get("/edel-series",function(req,res)
{
    res.render('./he-tu-bep/edel-series');
});
app.get("/treasia-series",function(req,res)
{
    res.render('./he-tu-bep/treasia-series');
});
app.get("/phu-kien-tu-bep",function(req,res)
{
    res.render('./he-tu-bep/phu-kien-tu-bep');
});
app.get("/he-tu-bep",function(req,res)
{
    res.render('./he-tu-bep/he-tu-bep');
});

//He Tu Guong
app.get("/he-tu-guong",function(req,res)
{
    res.render('./he-tu-guong/he-tu-guong');
});
app.get("/eleena-series",function(req,res)
{
    res.render('./he-tu-guong/eleena-series');
});
app.get("/famile-series",function(req,res)
{
    res.render('./he-tu-guong/famile-series');
});
app.get("/ondine-series",function(req,res)
{
    res.render('./he-tu-guong/ondine-series');
});
app.get("/suria-series",function(req,res)
{
    res.render('./he-tu-guong/suria-series');
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

//THong tin 
app.get("/quy-trinh-dat-hang",function(req,res)
{
    res.render('./thong-tin/quy-trinh-dat-hang');
});
app.get("/gioi-thieu",function(req,res)
{
    res.render('./thong-tin/gioi-thieu');
});
app.get("/dac-tinh-san-pham",function(req,res)
{
    res.render('./thong-tin/dac-tinh-san-pham');
});
app.get("/quy-trinh-san-xuat",function(req,res)
{
    res.render('./thong-tin/quy-trinh-san-xuat');
});

//Lien he
app.get("/lien-he",function(req,res)
{
    res.render('lien-he');
});