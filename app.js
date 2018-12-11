var createError = require('http-errors');
var express = require('express');
var ejs = require('ejs');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var csv=require('csvtojson');
var csvjson =require('csvjson');
var fs = require('fs');
var upload = require('express-fileupload');




var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var charts_controller = require('./controllers/charts_controller');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(err, req, res, next) {
  console.log(err.message);

  next(createError(404));
});



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.get('/visualisations_data', function(req,res,html){
    //console.log(req.query.name);
  charts_controller.test(req.query.name);
  res.sendFile(path.join(__dirname+ '/views/visualisations_data.html'))
});

app.get('/visualisations_compare', function(req,res,html){
    //console.log(req.query.name);
  charts_controller.test_compare(req.query.name);
  res.sendFile(path.join(__dirname+ '/views/visualisations_compare.html'))
});


app.get('/map', function(req,res,html){
  res.sendFile(path.join(__dirname+ '/views/map.html'))
});

app.get('/import', function(req,res,html){
  res.sendFile(path.join(__dirname+ '/views/import.html'))
});

app.get('/bubblechart', function(req,res,html){
  res.sendFile(path.join(__dirname+ '/views/bubblechart.html'))
});

app.get('/cities', function(req,res,html){
  res.sendFile(path.join(__dirname+ '/views/cities.html'))
});

app.get('/dashboard', function(req,res,html){
  // console.log(req.query.name);
  res.sendFile(path.join(__dirname+ '/views/dashboard.html'))
});

app.get('/testapi', function(req,res){
  console.log('dbsjbjs');
  res.send('nmscmscsmcmscmscm');});

//file upload
app.use(upload());

app.get('/import',function(req,res){
  res.sendFile(__dirname+'views/import.html');
})
app.post('/import',function(req,res){
  console.log(req.files);
  if(req.files.upfile){
    var file = req.files.upfile,
      name = file.name,
      type = file.mimetype;
    var uploadpath = __dirname + '/public/data/' + name;
    file.mv(uploadpath,function(err){
      if(err){
        console.log("File Upload Failed",name,err);  res.send('nmscmscsmcmscmscm');
        res.redirect('/import');
      }
      else {
        console.log("File Uploaded",name);  res.send('nmscmscsmcmscmscm');
        res.redirect('/import');
      }
    });
  }
  else {
    res.send('nmscmscsmcmscmscm');

    res.redirect('/import');
    res.end();
  };
})



//connecting sql
// const mysql = require('mysql');  
// const fs = require('fs');
// const url = require("url");

// let connectionString = "mysql://admin:MLNHPZBFCCDODITG@sl-us-south-1-portal.30.dblayer.com:52741/compose";

// let mysqlurl = new url.URL(connectionString);

// const connection = mysql.createConnection(  
//     {
//         host: mysqlurl.hostname,
//         port: mysqlurl.port,
//         user: mysqlurl.username,
//     	password: mysqlurl.password,
//     	database: mysqlurl.pathname.split("/")[1]
// });

// connection.query('SHOW DATABASES', (err, rows) => {  
//     if (err) throw err;
//     console.log('Connected!');
//     for (let i = 0, len = rows.length; i < len; i++) {
//         console.log(rows[i]['Database'])
//     }

// });

// var sql = "create table if not exists temp(id int primary key auto_increment,title varchar(255)not null)";
//   connection.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });



//   connection.query('select * from temp', function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });



module.exports = app;
