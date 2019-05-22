const app = require('../lib/app');
const request = require('supertest');

describe('exist route', () => {
  it('gets data from exist correctly', () => {
    return request(app)
      .get('existurl')
      .then(res => {
        expect(res.body).toEqual({
          'id': 1,
          'username': 'josh',
          'first_name': 'Josh'
        });
      });
  });

});
