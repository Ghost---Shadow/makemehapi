const Hapi = require('hapi');

const server = new Hapi.Server();
const port = 8080;
// const port = Number(process.argv[2] || 8080);

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
/*
server.start(() => {
  console.log('Server running at:', server.info.uri);
});
*/
module.exports = server;
