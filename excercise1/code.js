const Hapi = require('hapi');

const server = new Hapi.Server();
const okString = 'Hello hapi';
// const port = 8080;
const port = Number(process.argv[2] || 8080);

server.connection({
  host: 'localhost',
  port,
});

function handler(request, reply) {
  reply(okString);
}

server.route({ path: '/', method: 'GET', handler });


server.start(() => {
  console.log('Server running at:', server.info.uri);
});


module.exports.server = server;
module.exports.okString = okString;
