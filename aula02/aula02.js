// criar um simples servidor

// criando um objeto http
const http = require('http');


http.createServer((requeste, response) => {
    response.writeHead(200, {'Content-Tyepe': 'text/plain'});
    response.write('CFB  - Cursos \n');
    response.end();
}).listen(5522);

