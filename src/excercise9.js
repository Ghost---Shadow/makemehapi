const Hapi = require('hapi');
const Joi = require('joi');

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
  path: '/chickens/{breed}',
  method: 'GET',
  handler: (req, res) => {
    res(`You asked for the chicken ${req.params.breed}`);
  },
  config: {
    validate: {
      params: {
        breed: Joi.string().required(),
      },
    },
  },
});

if (!module.parent) {
  server.start(() => {
    console.log('Server running at:', server.info.uri);
  });
}

module.exports = server;
