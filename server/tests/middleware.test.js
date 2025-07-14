const authMiddleware = require('../middleware/auth');
const httpMocks = require('node-mocks-http');

test('should block unauthenticated request', () => {
  const req = httpMocks.createRequest();
  const res = httpMocks.createResponse();
  const next = jest.fn();

  authMiddleware(req, res, next);

  expect(res.statusCode).toBe(401);
});