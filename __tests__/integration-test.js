const chai = require('chai');
const supertest = require('supertest');
const app = require('../server');

const expect = chai.expect;
const request = supertest(app);

describe('Integration Test', () => {
  it('should return status code 200 for the home route', async () => {
    const response = await request.get('/');
    expect(response.status).to.equal(200);
  });
});
