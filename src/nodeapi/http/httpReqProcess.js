const http = require('http');
const url = require('url');

const server = http.createServer(
    (req, resp) => {
        urlParser1(req);
        urlParser2(req);
        resp.end('ok');
    }
)

server.listen(
    9001,
    () => { return }
)


// parse params using url module
function urlParser1(req) {
    let testUrl = url.parse(req.url, true);
    console.log(testUrl.pathname);
    console.log(testUrl.query);
}
function urlParser2(req) {
    let testUrl = new URL(req.url, 'http://127.0.0.1');
    console.log(testUrl.pathname);
    console.log(testUrl.searchParams.get('passwd'));
}