import { authApi } from '@/api/auth-api';
import useSWR from 'swr';
import { PublicConfiguration } from 'swr/dist/types';

export function useAuth(options?: Partial<PublicConfiguration>) {
  // profile
  const MILLISECOND_PER_HOUR = 60 * 60 * 1000;

  const {
    data: profile,
    error,
    mutate,
  } = useSWR(`/auth`, {
    revalidateOnFocus: false,
    dedupingInterval: MILLISECOND_PER_HOUR,
    ...options,
  });

  async function login() {
    await authApi.login({
      email: 'duy@gmail.com',
      password: '12345678',
    });
    await mutate();
  }

  const firstLoading = profile === undefined && error === undefined;
  async function logout() {
    await authApi.logout();
    mutate({}, false);
  }

  return {
    profile,
    error,
    login,
    logout,
    firstLoading,
  };
}
