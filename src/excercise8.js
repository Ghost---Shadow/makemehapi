const Hapi = require('hapi');
const fs = require('fs');
const r13t = require('rot13-transform');

const server = new Hapi.Server();
let port = 8080;

if (!module.parent) {
  port = Number(process.argv[2]);
}

server.connection({
  host: 'localhost',
  port,
});

server.route({
  path: '/',
  method: 'GET',
  handler(request, reply) {
    reply(fs.createReadStream('./text/ex8.txt')
      .pipe(r13t()));
  },
});

if (!module.parent) {
  server.start(() => {
    console.log('Server running at:', server.info.uri);
  });
}

module.exports = server;
