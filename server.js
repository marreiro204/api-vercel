const path = require('path');
const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use('/api', router);

server.get('/', (req, res) => {
  res.json({
    message: "API online! Acesse /api/jogadores",
    endpoints: ["/api/jogadores"]
  });
});

// ⚠️ IMPORTANTE: não usar server.listen()
module.exports = server;
