import { renderHook, act } from '@testing-library/react-hooks';
import { AuthProvider, useAuth } from './AuthContext';

test('login sets the user', () => {
  const wrapper = ({ children }) => <AuthProvider>{children}</AuthProvider>;
  const { result } = renderHook(() => useAuth(), { wrapper });

  act(() => {
    result.current.login('testuser');
  });

  expect(result.current.user).toEqual({ username: 'testuser' });
});

test('logout clears the user', () => {
  const wrapper = ({ children }) => <AuthProvider>{children}</AuthProvider>;
  const { result } = renderHook(() => useAuth(), { wrapper });

  act(() => {
    result.current.login('testuser');
    result.current.logout();
  });

  expect(result.current.user).toBeNull();
});
