const Hapi = require('hapi');

const server = new Hapi.Server();
let port = 8080;

if (!module.parent) {
  port = Number(process.argv[2]);
}

server.connection({
  host: 'localhost',
  port,
});

server.register(require('inert'), (err) => {
  if (err) throw err;
  server.route({
    path: '/foo/bar/baz/{param}',
    method: 'GET',
    handler: {
      directory: { path: './excercise4/public' },
    },
  });
});

if (!module.parent) {
  server.start(() => {
    console.log('Server running at:', server.info.uri);
  });
}
module.exports = server;
