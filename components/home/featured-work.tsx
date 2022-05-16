import { Work, Project } from '@/models';
import { Box, Container, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import * as React from 'react';
import { ProjectList } from '../work';

export interface IFeatureWorkProps {
}

export function FeatureWork (props: IFeatureWorkProps) {
   const projectList:Project[] =  [
    {
      id: '1',
      name: 'Flooding Map        ',
      from: 'NaN',
      to: 'NaN',
      description: `
    I. Purpose
    <p>Research possible flood scenarios in the area with different timings
    </p>
    II. Content 

    
    <p>Viewer: </p>
    <p>Check the information about flood on the map with different scenarios and times
    </p>
    <p>Has the function of automatically displaying the inundation situation over time
    </p>

    <p>Builder: 
    </p>
    <p>Add, edit, delete scenarios
    </p>
    <p>Add, edit, delete flooding information
    </p>
    III. Trình duyệt hỗ trợ
    <p>Web browse</p>
    `,
    thumbnailUrl:'https://images.unsplash.com/photo-1485617359743-4dc5d2e53c89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      database: 'Sql server',
      programingLanguages:
        'Google Api , Angular 12, .Net Framework, Sql server, Mapbox GL js, PrimeNG, Material, Turf js, ng-bootstrap, SQL Server, HTML, CSS,1 số dịch vụ của eKMap…  ',
      teamSize: 6,
      responsibilities: `
    I. Main responsibilities:
    <p>1. Development</p>
    <p>Design database

    </p>
    <p>2. Frontend</p>
    <p>Design UI

    </p>
    <p>Get data from Backend</p><p>Display information on the interface
    </p>
    <p>3. Test , Fixbug</p>`,
      technologies: 'Angular, .Net Framework',
      tools:
        'Window, Visual studio code, visual studio, Postman, notepad++',
      srcCode: '',
      url: '',
    },
    {
      id: '2',
      name: 'RealEstate       ',
      from: 'NaN',
      to: 'NaN',
      description: `
    I. Purpose
    <p>Application for real estate companies, allowing to manage real estate information on the map
    </p>
    II. Content 
    <p>Viewer: </p>
    <p>Add, edit, delete 
    </p>
    <p>Open the list of real estate 
    </p>
    <p>Open the planning map
    </p>
    <p>Upload data files to the map
    </p>
    <p>Planning analysis
    </p>
    <p>Look up information on the map
    </p>
    <p>Builder: 
    </p>
    <p>Configure display data
    </p>
    III. Trình duyệt hỗ trợ
    <p>Web browse</p>
    `,
    thumbnailUrl:'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',

      database: 'Sql server',
      programingLanguages:
        'Google Api , Angular 12, .Net Framework, Sql server, Mapbox GL js, PrimeNG, Material, Turf js, ng-bootstrap, SQL Server, HTML, CSS,1 số dịch vụ của eKMap… ',
      teamSize: 4,
      responsibilities: `
    I. Main responsibilities:
    <p>1. Development</p>
    <p>Design database
    </p>
    <p>2. Frontend</p>
    <p>Design UI
    </p>
    <p>Get data from Backend</p><p>Display information on the interface
    </p>
    <p>3. Test , Fixbug</p>`,
      technologies: 'Angular, .Net Framework',
      tools:
        'Window, Visual studio code, visual studio, Postman, notepad++',
      srcCode: '',
      url: '',
    },
    {
      id: '3',
      name: 'eKMap pipe  ',
      from: '2/2022 ',
      to: '4/2022',
      description: `
    I. Purpose
    <p> Application to manage flushing plans, pipe flushing plans
    </p>
    II. Content 
    <p>Viewer: </p>
    <p>1. Flushing Plans Mangement

    </p>
    <p>a. List of option

    </p>
    <p>b. Add, edit, delete option

    </p>
    <p>c. Add detail option
    </p>
    <p>d. Add rinsing result
    </p>
     <p>e. History of rinsing
    </p>
     <p>2. Construction Unit Management 
    </p>
     <p>a. Add, edit, delete Construction Unit
    </p>
    <p>b. Look for Construction Unit
    </p>
    <p>c. Import list of Construction Unit from Excel
    </p>
    <p>Builder: 
    </p>
    <p>Configure display data
    </p>
    III. Trình duyệt hỗ trợ
    <p>Web browse</p>
    `,
    thumbnailUrl:'https://images.unsplash.com/photo-1538474705339-e87de81450e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',

      database: 'Sql server',
      programingLanguages:
        'Google Api , Angular 13, .Net Core 5, Sql server, Mapbox GL js, PrimeNG, Material, Turf js, ng-bootstrap, SQL Server, HTML, CSS,1 số dịch vụ của eKMap…  ',
      teamSize: 5,
      responsibilities: `
    I. Main responsibilities:
    <p>1. Development</p>
    <p>Design database
    </p>
    <p>2. Frontend</p>
    <p>Design UI
    </p>
    <p>Get data from Backend</p><p>Display information on the interface
    </p>
    <p>3. Test , Fixbug</p>`,
      technologies: 'Angular, .Net Framework',
      tools:
        'Window, Visual studio code, visual studio, Postman, notepad++',
      srcCode: '',
      url: '',
    },
  ]
     
  return (
    <Box component='section' pt={2} pb={4}>
      <Container>
        <Stack direction='row' mb={2} justifyContent='space-between'>
            <Typography>
                Works
            </Typography>
            <Link passHref href='/works'>
                View all
            </Link>
        </Stack>
        <ProjectList projects={projectList}/>
      </Container>
    </Box>
  );
}
