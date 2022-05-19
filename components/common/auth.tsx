import { useAuth } from '@/hooks';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import Spinner from './spinner';

export interface IAuthProps {
  children: any;
}

export function Auth({ children }: IAuthProps) {
  const router = useRouter();
  const { profile, firstLoading } = useAuth();
  useEffect(() => {
      if(!firstLoading && !(profile as any)?.name) router.push('/login');
  }, [router, profile, firstLoading]);
  if ( !(profile as any)?.name) return  (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0,0,0,0.15)',
      }}
    >
      <Spinner></Spinner>
    </div>
  ) ;
  return <div>{children}</div>;
}
