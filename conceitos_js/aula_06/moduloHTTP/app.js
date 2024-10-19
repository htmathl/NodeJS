const http = require('http')

http.createServer((req, res) => {
    res.end('Servidor irá explodir em breve')
}).listen(80, () => {
    console.log('Servidor irá explodir em breve')
})