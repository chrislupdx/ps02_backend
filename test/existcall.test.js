const app = require('../lib/app');
const request = require('supertest');
const token = require('./importantstuff');
describe('exist route', () => {

  it('gets data from exist correctly', () => {
    return request(app)
      .get(`https://exist.io/api/1/users/$self/today/
      ?Authorization=${token}`)
      .then(res => {
        expect(res.body).toEqual({
        
        });
      });
  });

});
