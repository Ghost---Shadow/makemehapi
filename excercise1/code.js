const Hapi = require('hapi');

const server = new Hapi.Server();
const okString = 'Hello hapi';

let port = 8080;

if (!module.parent) {
  port = Number(process.argv[2]);
}

server.connection({
  host: 'localhost',
  port,
});

function handler(request, reply) {
  reply(okString);
}

server.route({ path: '/', method: 'GET', handler });

if (!module.parent) {
  server.start(() => {
    console.log('Server running at:', server.info.uri);
  });
}


module.exports.server = server;
module.exports.okString = okString;
