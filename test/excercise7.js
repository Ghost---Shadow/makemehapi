const supertest = require('supertest');

const { expect } = require('code');
const labScript = require('lab').script();

const { it } = labScript;
exports.lab = labScript;

const server = require('../src/excercise7');

describe('Server should return data', () => {
  it('/?name=Helping&suffix=!', (done) => {
    supertest(server.listener)
      .get('/?name=Helping&suffix=!')
      .then((response) => {
        expect(response.statusCode).toBe(404);
        done();
      })
      .catch(console.log);
  });
});
