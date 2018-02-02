const { expect } = require('code');
const labScript = require('lab').script();

const { it } = labScript;
exports.lab = labScript;

const server = require('../src/excercise10');

it('Not guest, username but not accesstoken', (done) => {
  const jsonObj = {
    isGuest: false,
    username: 'a',
    accessToken: 'a1',
  };
  const req = {
    method: 'POST',
    url: '127.0.0.1:8080/login',
    payload: JSON.stringify(jsonObj),
  };
  server.inject(req, (res) => {
    expect(res.statusCode).to.equal(200);
    done();
  });
});
