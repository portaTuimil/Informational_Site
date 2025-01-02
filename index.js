const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs')

http.createServer((req, res) => {
    let URL = url.parse(req.url, true).pathname;
    let filename = URL === "/" ? `/index.html` : `${URL}.html`;
    filename = path.join("Pages", filename)
    console.log(URL)

    fs.readFile(filename, function(err, data) {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end(`<h1>Error: 404</h1><p>The page you are looking for doesn't exist.</p> <a href="/">Back home.</a>`);
      } 
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();

})}).listen(8080, ()=>{console.log("-Server Running... \nPort:8080")});
