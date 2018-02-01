const Hapi = require('hapi');

const server = new Hapi.Server();
const prefix = 'Hello ';
let port = 8080;

if (!module.parent) {
  port = Number(process.argv[2]);
}

server.connection({
  host: 'localhost',
  port,
});

function handler(request, reply) {
  reply(prefix + request.params.name);
}

server.route({ path: '/{name}', method: 'GET', handler });

if (!module.parent) {
  server.start(() => {
    console.log('Server running at:', server.info.uri);
  });
}

module.exports.server = server;
module.exports.prefix = prefix;
