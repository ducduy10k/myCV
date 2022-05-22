import { Box, Container } from '@mui/material';
import dynamic from 'next/dynamic';
import * as React from 'react';
import { render } from 'react-dom';
import * as icons from 'react-icons/si';
export interface ISkillsProps {}

export default function FeaturedSkill(props: ISkillsProps) {
  const listSkill: any = {
    angular: <icons.SiAngular />,
    react: <icons.SiReact />,
    nodejs: <icons.SiNodedotjs />,
    vue: <icons.SiVuedotjs />,
    php: <icons.SiPhp />,
    aws: <icons.SiAmazonaws />,
    android: <icons.SiAndroid />,
    apache: <icons.SiApache />,
    ios: <icons.SiIos />,
    cplus: <icons.SiCplusplus />,
    cshap: <icons.SiCsharp />,
    css: <icons.SiCss3 />,
    deno: <icons.SiDeno />,
    git: <icons.SiGit />,
    html: <icons.SiHtml5 />,
    java: <icons.SiJava />,
    javascript: <icons.SiJavascript />,
    mongobd: <icons.SiMongodb />,
    nestjs: <icons.SiNestjs />,
    nextjs: <icons.SiNextdotjs />,
    python: <icons.SiPython />,
    sass: <icons.SiSass />,
    sqlite: <icons.SiSqlite />,
    sqlserver: <icons.SiMicrosoftsqlserver />,
    mysql: <icons.SiMysql />,
    dotnet: <icons.SiDotnet />,
  };

  const skills: any = [
    {
      name: 'angular',
      percentage: 10,
    },
    {
      name: 'react',
      percentage: 90,
    },
  ];

  return (
    <Box pt={{ xs: 4, md: 18 }} pb={{ xs: 7, md: 9 }}>
      <Container>
        {skills.map((skill: any) => (
          <div className="skills__data">
            <div className="skills__names">
              {listSkill[skill.name]} &nbsp; &nbsp;
              <span className="skills__name">Angular</span>
            </div>
            <div className="skills__percentage">{skill.percentage}</div>
            <div className="skill__bar" style={{ width: skill.percentage + '%' }}></div>
          </div>
        ))}
      </Container>
    </Box>
  );
}
