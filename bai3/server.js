var express = require('express');
var app = express();
var path = require('path');

app.listen(process.env.PORT || 3000, () => {
    console.log('Server started');
  });   

var expressHbs = require('express-handlebars');

app.engine('hbs',expressHbs.engine());
app.set('view engine','hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

app.get('/baitap', function(req, res) {
    const data = {
        name: 'NAM QUỐC SƠN HÀ ',
        quote: 'Đại Việt sử ký toàn thư',
        verse: "Phiên âm Hán –Việt",
        poem: "<br>Nam quốc sơn hà Nam đế cư<br>Tiệt nhiên định phận tại thiên thư<br>Như hà nghịch lỗ lai xâm phạm<br>Nhữ đẳng hành khan thủ bại hư.",
        css: '/public/style.css',
            };
    res.render('home',data);
});
