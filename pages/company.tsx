import { FeatureWork } from '@/components/home/featured-work';
import { CompanyList } from '@/components/company';
import { MainLayout } from '@/components/layout';
import { Work, Company } from '@/models';

import * as React from 'react';

export interface ICompanyProps {
}

export default function CompanyPage(props: ICompanyProps) {
  const companyList: Company[] = [
    {
      id: '1',
      companyName: 'eKGIS',
      position: 'Fullstack',
      from: 'May 2020',
      to: 'April 2022',
      projects: [],
    },

    {
      id: '2',
      companyName: 'RikkeiSoft',
      position: 'Frontend',
      from: '10 April 2022',
      to: 'Current',
      projects: [],

    }
  ]
  return (
    <div>
      {/* <FeatureWork /> */}
      <CompanyList companies={companyList} />

    </div>
  );
}

CompanyPage.Layout = MainLayout