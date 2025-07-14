export const getStatus = (req, res) => {
  res.json({ message: '✅ Backend is working!' });
};

export const getUser = (req, res) => {
  const { id } = req.params;
  res.json({ id, name: 'Test User', email: 'test@example.com' });
};
