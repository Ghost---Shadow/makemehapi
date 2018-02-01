const supertest = require('supertest');

const { expect } = require('code');
const labScript = require('lab').script();

const { it } = labScript;
exports.lab = labScript;

const server = require('../src/excercise8');

it('Ideal case', (done) => {
  const jsonObj = {
    isGuest: false,
    username: 'a',
    accessToken: 'a1',
    password: 'b2',
  };
  supertest(server.listener)
    .post('/login', jsonObj)
    .then((response) => {
      expect(response.statusCode).to.equal(200);
      done();
    })
    .catch(console.log);
});
