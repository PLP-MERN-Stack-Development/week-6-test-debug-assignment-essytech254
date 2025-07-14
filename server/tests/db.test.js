const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongo;

beforeAll(async () => {
  mongo = await MongoMemoryServer.create();
  await mongoose.connect(mongo.getUri());
});

afterAll(async () => {
  await mongoose.connection.close();
  await mongo.stop();
});

test('can insert and find a user', async () => {
  const User = require('../models/User');
  const user = await User.create({ email: 'test@x.com', password: 'pass' });
  const found = await User.findOne({ email: 'test@x.com' });

  expect(found.email).toBe('test@x.com');
});
