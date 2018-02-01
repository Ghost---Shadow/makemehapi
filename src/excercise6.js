const Hapi = require('hapi');
const H2o2 = require('h2o2');

const server = new Hapi.Server();
let port = 8080;

if (!module.parent) {
  port = Number(process.argv[2]);
}

server.connection({
  host: 'localhost',
  port,
});

server.register(H2o2, (err) => {
  if (err) throw err;
  server.route({
    path: '/proxy',
    method: 'GET',
    handler: {
      proxy: {
        host: '127.0.0.1',
        port: 65535,
      },
    },
  });
});


if (!module.parent) {
  server.start(() => {
    console.log('Server running at:', server.info.uri);
  });
}

module.exports = server;
