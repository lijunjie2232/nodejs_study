const http = require('http');

const server = http.createServer(
    (req, resp) => {
        // response status code
        resp.statusCode = 201;
        // response header set
        resp.setHeader("set-Cookie", ["session_id=hfae65e36fg43egresg6sea", "client_id=138794060464"]);
        // write text into response body
        resp.write('this page\n');
        resp.write('is\n');
        resp.end('ok');
    }
)

server.listen(
    9001,
    () => {
        console.log('server started');
    }
)