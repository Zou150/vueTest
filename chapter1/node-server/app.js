
const http = require('http')

const urlModule = require('url')

const server = http.createServer()

server.on('request', function(req,res) {
     
    // const url = req.url

    const { pathname: url,query } = urlModule.parse(req.url ,true)
 
    if(url === '/getscript') {
        // var scriptStr = 'show()'

        var data = {
            status: 0,
            message: [
                {
                    id: 1,
                    name: '模型',
                    ctime: '2019-03-21 16:28:15'
                },
                {
                    id: 2,
                    name: '233',
                    ctime: '2019-03-01 16:28:15'
                }
            ]
        }
        var scriptStr = `${query.callback}(${JSON.stringify(data)})`
        res.end(scriptStr)
    }else {
        res.end('404')
    }
}) 


server.listen(3000, function() {
    console.log('server linsten at http:/192.168.1.15:3000');
})