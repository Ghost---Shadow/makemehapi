const request = require('request');
const fs = require('fs');

const server = require('./code');

describe('The server should return', () => {
  beforeAll((done) => {
    server.start(() => {
      console.log('Server running at:', server.info.uri);
      done();
    });
  });
  afterAll((done) => {
    server.stop(() => {
      done();
    });
  });
  it('index.html on valid request', (done) => {
    request('http://localhost:8080/', (error, response, body) => {
      const fileString = fs.readFileSync('./index.html');
      expect(response.statusCode).toBe(200);
      expect(body).toBe(fileString);
      done();
    });
  });
  it('error on invalid request', (done) => {
    request('http://localhost:8080/nope', (error, response, body) => {
      expect(response.statusCode).toBe(404);
      done();
    });
  });
});
