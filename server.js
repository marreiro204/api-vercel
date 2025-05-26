const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Aponta para o seu db.json
const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 4000; // A Vercel vai fornecer a PORT

server.use(middlewares);
server.use('/api', router); // Prefixo para todas as rotas (ex: /api/jogadores)

server.get('/', (req, res) => {
  res.json({
    message: "API online! Acesse /api/jogadores",
    endpoints: ["/api/jogadores"]
  });
});

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});