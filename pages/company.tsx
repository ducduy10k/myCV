import { FeatureWork } from '@/components/home/featured-work';
import { CompanyList } from '@/components/company';
import { MainLayout } from '@/components/layout';
import { Work, Company } from '@/models';
import * as moment from 'moment/moment';
import * as React from 'react';

export interface ICompanyProps {
}

export default function CompanyPage(props: ICompanyProps) {
  const companyList: Company[] = [
    {
      id: '1',
      companyName: 'eKGIS',
      position: 'Fullstack',
      from: new Date('01-01-2022'),
      to: new Date('10-01-2022'),
      projects: [{
        name: 'education',
        id: '1'
      }, {
        name: 'commerce',
        id: '2'
      },
      {
        name: 'parmacy',
        id: '3'
      }],
    },

    {
      id: '2',
      companyName: 'RikkeiSoft',
      position: 'Frontend',
      from: new Date('2022-01-01'),
      to: new Date('2022-09-01'),
      projects: [{
        name: 'education',
        id: '1'
      }, {
        name: 'commerce',
        id: '2'
      },
      {
        name: 'parmacy',
        id: '3'
      }],

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