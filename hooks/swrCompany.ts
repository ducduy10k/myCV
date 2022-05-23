import { companyApi } from '@/api/company-api';
import { Company } from '@/models';
import useSWR from 'swr';
import { PublicConfiguration } from 'swr/dist/types';

interface DataResponse<T> {
  companies: T;
  error: boolean;
  firstLoading: any;
}

export function useCompany(
  options?: Partial<PublicConfiguration>
): DataResponse<Company[] | undefined> {
  const MILLISECOND_PER_HOUR = 60 * 60 * 1000;
  const { data, error, mutate } = useSWR(`/company`, {
    revalidateOnFocus: false,
    dedupingInterval: MILLISECOND_PER_HOUR,
    ...options,
  });
  const companies: Company[] | undefined = data as any;
  const firstLoading = companies === undefined && error === undefined;

  return {
    companies,
    error,
    firstLoading,
  };
}
