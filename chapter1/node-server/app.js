
// const http = require('http')
// const urlModule = require('url')
// const server = http.createServer()

// // server.on('request', function(req,res) {
// //     // const url = req.url
// //     const { pathname: url,query } = urlModule.parse(req.url ,true)
// //     if(url === '/getscript') {
// //         // var scriptStr = 'show()'
// //         var data = {
// //             status: 0,
// //             message: [
// //                 {
// //                     id: 1,
// //                     name: '模型',
// //                     ctime: '2019-03-21 16:28:15'
// //                 },
// //                 {
// //                     id: 2,
// //                     name: '233',
// //                     ctime: '2019-03-01 16:28:15'
// //                 }
// //             ]
// //         }
// //         var scriptStr = `${query.callback}(${JSON.stringify(data)})`
// //         res.end(scriptStr)
// //     }else {
// //         res.end('404')
// //     }
// // }) 

// server.listen(3000, function() {
//     console.log('server linsten at http:/192.168.1.15:3000');
// })

//加载需要的模块
var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');

//启动服务器
app.listen(3000, function(){
  console.log('server running at 3000');
});

//相关配置
app.use('/views', express.static(path.join(__dirname, './views')));//静态资源
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//相关请求
app.get('/', (req, res) => {
  res.redirect(302, '/views/index.html');
});
app.get('/getlist', (req, res) => {
    fs.readFile('./list.json', 'utf8', (err, data) => {
        if(err){
            res.json(err);
        }else{
            res.json(JSON.parse(data.toString()));
        }
    });
  });
  app.post('/setlist', function(req, res){
    var dataStr = JSON.stringify(req.body.list);
    fs.writeFile('./list.json', dataStr, 'utf8', function(err){
        if(err){
            res.json({status: 200, message: 'ok'});
        }else{
            res.json({status: 500, message: 'failed'});
        }
    });
  });