// const fs = require('fs');

// const data = fs.readFileSync('./data/data.js', 'utf8');
// const dataObj = JSON.parse(data);
// console.log(dataObj);

const http = require('http');
const { url } = require('inspector');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello World!');
    res.end();
  }

  if (req.url === '/api/me') {
    res.write(JSON.stringify([1, 2, 3, 4, 5]));
    res.end();
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
