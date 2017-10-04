const supertest = require('supertest');

const config = require('../fixtures/config');
const request = supertest(config.host);

describe('GitHub API', () => {

  describe('GET /users', () => {
    it("should return the user information", (done) => {
      return request
        .get('/users/alopezsanchez')
        .expect(200)
        .then((res) => {
          const info = res.body;
          expect(info.login).toEqual('alopezsanchez');
          expect(info.html_url).toEqual('https://github.com/alopezsanchez');
          expect(info.name).toEqual('Alejandro López');
          expect(info.company).toEqual('Corunet');
          expect(info.id).not.toBe(1);
          done();
        });
    });
  });

  describe('GET /users/:username/repos', () => {
    let repo = null;

    beforeAll(() => {
      request
        .get('/repos/alopezsanchez/generic-image-server')
        .expect(200)
        .then(res => {
          repo = res.body;
        });
    });

    it("should return all the public repositories for the specified user", () => {
      return request
        .get('/users/alopezsanchez/repos')
        .expect(200)
        .then(res => {
          expect(res.body).toBeInstanceOf(Array);
          const genericImageServerRepo = res.body.find(repo => repo.name === 'generic-image-server');
          expect(repo.name).toEqual(genericImageServerRepo.name);
        });
    });

    it("should return all the public all the public repositories for the specified user DESC", () => {
      return request
      .get('/users/alopezsanchez/repos')
      .query({ direction: 'desc' })
      .expect(200)
      .then(res => {
        expect(res.body).toBeInstanceOf(Array);
        expect(res.body[0].name).toEqual('vvs-practicatesting');
      });
    });

    afterAll(() => {
      repo = null;
    });
  });
});