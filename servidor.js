import http from "http";

const PORT = 3000;

const rotas = {
    "/": "home",
    "/cadastrar": "Tela de cadastro",
    "/excluir": "Tela de exclusao",
};



const server = http.createServer((req, res)=> {
    if(rotas[req.url]){
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end(rotas[req.url]);
    }else{
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end("Tela nao encontrada")
    }
    
}) 



server.listen(PORT, ()=> {
    console.log(`Server escutando na porta ${PORT}`)
});

