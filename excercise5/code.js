const Hapi = require('hapi');
const Path = require('path');
const Vision = require('vision');
const Handlebars = require('handlebars');

const server = new Hapi.Server();
const port = 8080;
// const port = Number(process.argv[2] || 8080);

server.connection({
  host: 'localhost',
  port,
});

server.register(Vision, (err) => {
  if (err) throw err;
  server.route({
    path: '/',
    method: 'GET',
    handler: {
      view: 'index.html',
    },
  });
  server.views({
    engines: {
      html: Handlebars,
    },
    path: Path.join(__dirname, 'templates'),
  });
});
/*
server.start(() => {
  console.log('Server running at:', server.info.uri);
});
*/
module.exports = server;
