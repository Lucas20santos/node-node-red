// trabalhar com rotas
// criando um objeto http
const http = require('http');

// criando uma porta
const port = 3000;

// criando um endereço ip para o host se não indicar outro ip, o ip fornecido é o padrão
const host = '127.0.0.1';


const servidor = http.createServer((request, response) => {
    res.writeHead(200, {'Content-Type': 'text/json'})
    if (request.url == "/")
    {
        response.write("<h1>Você está na página principal</h1>");
    }
    else if(request.url ==  "/canal")
    {
        response.write("<h1>CFB Cursos</h1>");
    }
    else if(request.url == "/curso")
    {
        response.write("<h1></h1>");
    }

    
});

servidor.listen(port, host, () => {
    console.log("Servidor rodando!")
});
