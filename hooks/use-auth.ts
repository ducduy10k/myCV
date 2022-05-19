import { authApi } from '@/api/auth-api';
import useSWR from 'swr';
import { PublicConfiguration } from 'swr/dist/types';

export function useAuth(options?: Partial<PublicConfiguration>) {
  // profile
  const MILLISECOND_PER_HOUR = 60 * 60 * 1000;
  console.log('v');
  const {
    data: profile,
    error,
    mutate,
  } = useSWR(`/auth`, {
    revalidateOnFocus: false,
    dedupingInterval: MILLISECOND_PER_HOUR,
    ...options,
  });

  async function login(email: string, password: string) {
    await authApi.login({
      email,
      password,
    });
    // Gọi lại get auth để lấy lại profile
    await mutate();
  }

  const firstLoading = profile === undefined && error === undefined;
  async function logout() {
    await authApi.logout();
    // Xóa dữ liệu và không gọi api
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
