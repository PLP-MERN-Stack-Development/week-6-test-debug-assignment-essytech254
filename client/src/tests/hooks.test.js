import { renderHook } from '@testing-library/react';
import useAuth from '../hooks/useAuth';

test('should return initial auth state', () => {
  const { result } = renderHook(() => useAuth());
  expect(result.current.user).toBeNull();
});