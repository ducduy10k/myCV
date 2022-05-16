import { useAuth } from '@/hooks';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

export interface IAuthProps {
  children: any;
}

export function Auth({ children }: IAuthProps) {
  const router = useRouter();
  const { profile, firstLoading } = useAuth();
  useEffect(() => {
      if(!firstLoading && !(profile as any)?.name) router.push('/login');
  }, [router, profile, firstLoading]);
  if ( !(profile as any)?.name) return <p>Loading ...</p>;
  return <div>{children}</div>;
}
