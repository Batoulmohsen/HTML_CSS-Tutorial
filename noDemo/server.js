const http = require('http');

const server = http.createServer((req, res) => {

//     console.log('Someone visited server');
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hello from my first server!');
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });
if (req.url === '/api/users' && req.method === 'GET') {
    const users = [
        { id: 1, name: 'Alice' },   
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' }
    ];
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(users));
} else if (req.url === '/' ){
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from my first server!');
}   
});
const PORT = 5000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});