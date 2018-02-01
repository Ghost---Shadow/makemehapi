const supertest = require('supertest');

const { expect } = require('code');
const labScript = require('lab').script();

const { it } = labScript;
exports.lab = labScript;

const server = require('../src/excercise7');

describe('Server should return data', () => {
  it('/', (done) => {
    supertest(server.listener)
      .get('/')
      .then((response) => {
        expect(response.statusCode).toBe(404);
        expect(response.body).to.equal('a');
        done();
      })
      .catch(console.log);
  });
});
