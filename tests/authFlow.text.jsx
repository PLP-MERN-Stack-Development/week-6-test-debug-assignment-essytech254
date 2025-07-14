import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../components/Login';

test('login form submits with email and password', () => {
  render(<Login />);
  fireEvent.change(screen.getByPlaceholderText('Email'), {
    target: { value: 'test@example.com' }
  });
  fireEvent.change(screen.getByPlaceholderText('Password'), {
    target: { value: '123456' }
  });
  fireEvent.click(screen.getByText(/Login/i));

  expect(screen.getByText(/Logging in.../)).toBeInTheDocument();
});
