var express = require("express");
var app = express();
require("dotenv").config();
let port=process.env.PORT||3000;


app.listen(port);

app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('./public'));

app.get("/",function(req,res)
{
    res.render('home');
});

