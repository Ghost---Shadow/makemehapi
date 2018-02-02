const { expect } = require('code');
const labScript = require('lab').script();

const { it } = labScript;
exports.lab = labScript;

const server = require('../src/excercise10');

it('Not guest, username but not password', (done) => {
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

it('Not guest, username, password and accesstoken', (done) => {
  const jsonObj = {
    isGuest: false,
    username: 'a',
    accessToken: 'a1',
    password: 'b1',
  };
  const req = {
    method: 'POST',
    url: '127.0.0.1:8080/login',
    payload: JSON.stringify(jsonObj),
  };
  server.inject(req, (res) => {
    expect(res.statusCode).to.equal(400);
    done();
  });
});

it('Not guest, invalid username', (done) => {
  const jsonObj = {
    isGuest: false,
    username: 1234,
    accessToken: 'a1'
  };
  const req = {
    method: 'POST',
    url: '127.0.0.1:8080/login',
    payload: JSON.stringify(jsonObj),
  };
  server.inject(req, (res) => {
    expect(res.statusCode).to.equal(400);
    done();
  });
});

it('Not guest, invalid accesstoken', (done) => {
  const jsonObj = {
    isGuest: false,
    username: 'a',
    accessToken: 69,
  };
  const req = {
    method: 'POST',
    url: '127.0.0.1:8080/login',
    payload: JSON.stringify(jsonObj),
  };
  server.inject(req, (res) => {
    expect(res.statusCode).to.equal(400);
    done();
  });
});

it('Guest, has additional info', (done) => {
  const jsonObj = {
    isGuest: true,
    username: 'a',
    accessToken: 'asdsd',
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

it('Guest, no additional info', (done) => {
  const jsonObj = {
    isGuest: true,
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

it('Not guest, username but not accesstoken', (done) => {
  const jsonObj = {
    isGuest: false,
    username: 'a',
    password: 'a1',
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


// Not in problem statement
it('Not guest, username but not password and accesstoken', (done) => {
  const jsonObj = {
    isGuest: false,
    username: 'a'
  };
  const req = {
    method: 'POST',
    url: '127.0.0.1:8080/login',
    payload: JSON.stringify(jsonObj),
  };
  server.inject(req, (res) => {
    expect(res.statusCode).to.equal(400); // gives 200
    done();
  });
});
