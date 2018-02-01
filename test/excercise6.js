const { expect } = require('code');
const labScript = require('lab').script();

const { it } = labScript;
exports.lab = labScript;

const server = require('../src/excercise6');

it('Should get a valid response', (done) => {
  const req = {
    method: 'GET',
    url: '127.0.0.1:8080/proxy',
  };
  server.inject(req, (res) => {
    expect(res.statusCode).to.equal(502); // Proxy server not found
    done();
  });
});
