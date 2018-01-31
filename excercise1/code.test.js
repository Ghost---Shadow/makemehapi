const http = require('http');

describe('The server should return', () => {
  it('a string on valid request', (done) => {
    http.request('http://localhost:8080', (msg) => {
      expect(msg).toBe('Hello hapi');
      done();
    });
  });
  it('error on invalid request', (done) => {
    http.request('http://localhost:8080', (msg) => {
      expect(msg).toBe('Error');
      done();
    });
  });
});
