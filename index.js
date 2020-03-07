var express = require("express");
var app = express();
app.listen(5000);

app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('./public'));

app.get("/",function(req,res)
{
    res.render('home');
});