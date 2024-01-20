const http = require('http');

// create a server
const server = http.createServer(
    (req, resp) => {
        // console.log(req);
        // resp = reqAnl(req, resp);
        let body = ''


        // get request body (json or formdata or ...)
        req.on(
            'data',
            chunk => {
                body += chunk;
            }
        )
        req.on(
            'end',
            () => {
                console.log(body.toString());
            }

        )
        resp.setHeader('content-type', 'text/html;charset=utf-8');
        resp.end('{"code":200, "msg":"今日は"}');
    }
)

// listen to server port
server.listen(
    9001,
    () => {
        console.log('server start');
    }
)

// get req information
function reqAnl(req, resp) {
    // get request method
    console.log(req.method);
    // get request url
    console.log(req.url);
    // get http ver
    console.log(req.httpVersion);
    // get request headers
    console.log(req.headers);
    return resp;
}