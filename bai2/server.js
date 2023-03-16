var express = require('express');
var app = express();
var path = require('path');

app.listen(process.env.PORT || 3000, () => {
    console.log('Server started');
  });   

var expressHbs = require('express-handlebars');
app.engine('hbs',expressHbs.engine());
// lưu template vào folder 'Views'
//app.set('views','./bt_lab4/bai2/views')
app.set('view engine','hbs');
app.set('views', path.join(__dirname, 'views'));
app.get('/',function(req,res){
    res.send('Hello world');
});
app.get('/handlebars', function(req, res) {
    res.render('home', {layout: false});
  });