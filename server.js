const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer((req, res) => {
    let filePath = req.url.split('?')[0];
    if (filePath === '/') filePath = '/index.html';
    const fullPath = path.join(__dirname, filePath);
    fs.readFile(fullPath, (err, data) => {
        if (err) { res.writeHead(404); res.end('Not found'); return; }
        const ext = path.extname(filePath).toLowerCase();
        const types = {'.html':'text/html','.json':'application/json','.css':'text/css','.js':'application/javascript','.jpg':'image/jpeg','.png':'image/png','.gif':'image/gif'};
        res.writeHead(200, {'Content-Type': types[ext] || 'application/octet-stream'});
        res.end(data);
    });
});
server.listen(8080, () => console.log('Server running at http://localhost:8080'));
