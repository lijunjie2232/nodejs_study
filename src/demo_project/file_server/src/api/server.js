const http = require('http');
const url = require('url');
const { fsapi, staticProv } = require('../utils/fileOps.js');

function routeProcess(req, resp) {
    let parsedUrl = url.parse(req.url, true);
    let pathname = parsedUrl.pathname;
    switch (pathname) {
        case '/api':
            fsapi(parsedUrl.query, resp);
            break;
        case '/index':
            staticProv('index.html', resp);
            break;
        default:
            staticProv(pathname.substring(1,), resp);
    }
}

server = http.createServer(
    (req, resp) => {
        resp.setHeader('content-type', 'text/html;charset=utf-8');
        let retext = routeProcess(req, resp);
    }
)

server.listen(
    9001,
    () => {
        console.log('server started');
    }
)