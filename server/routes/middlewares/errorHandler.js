import request from 'supertest';
import app from '../app.js';

describe('GET /api/users/status', () => {
  it('should return status message', async () => {
    const res = await request(app).get('/api/users/status');
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe('✅ Backend is working!');
  });
});
