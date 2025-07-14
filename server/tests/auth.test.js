const request = require('supertest');
const app = require('../app');

test('POST /api/login authenticates user', async () => {
  const res = await request(app)
    .post('/api/login')
    .send({ email: 'test@example.com', password: '123456' });

  expect(res.statusCode).toBe(200);
  expect(res.body).toHaveProperty('token');
});
