// Test file (e.g., __tests__/model-test.js)
const assert = require('chai').assert;
const Userdb = require('../server/model/model');

describe('User Model', function () {
  it('should create a user instance with valid data', function () {
    const userData = {
      name: 'John Doe',
      email: 'john@example.com',
      gender: 'Male',
      status: 'Active'
    };

    const user = new Userdb(userData);
    assert.instanceOf(user, Userdb, 'user should be an instance of Userdb');
    assert.strictEqual(user.name, userData.name, 'name should match');
    assert.strictEqual(user.email, userData.email, 'email should match');
    assert.strictEqual(user.gender, userData.gender, 'gender should match');
    assert.strictEqual(user.status, userData.status, 'status should match');
  });
});
