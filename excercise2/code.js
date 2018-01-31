const Hapi = require('hapi');

const server = new Hapi.Server();
const prefix = 'Hello ';
const port = 8080;
// const port = Number(process.argv[2] || 8080);

server.connection({
  host: 'localhost',
  port,
});

function handler(request, reply) {
  reply(prefix + request.params.name);
}

server.route({ path: '/{name}', method: 'GET', handler });

/*
server.start(() => {
  console.log('Server running at:', server.info.uri);
});
*/

module.exports.server = server;
module.exports.prefix = prefix;
