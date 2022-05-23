import { Company, Skill } from '@/models';
import PersonIcon from '@mui/icons-material/Person';
import { Box, Chip, Stack, Typography, List, ListItem, Button, Modal, TextField } from '@mui/material';
import { margin } from '@mui/system';
import Image from 'next/image';
import * as React from 'react';
import * as icons from 'react-icons/si';

import addWeeks from 'date-fns/addWeeks';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateRangePicker, DateRange } from '@mui/x-date-pickers-pro/DateRangePicker';
import moment from 'moment';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { StringDecoder } from 'string_decoder';
export interface ICompanyCardProps {
  skill: Skill;
  handleOpen(id: string): void;
}
const style = {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 500,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
function getWeeksAfter(date: Date | null, amount: number) {
  return date ? addWeeks(date, amount) : undefined;
}
export function SkillItem({ skill, handleOpen }: ICompanyCardProps) {
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

  return (
    <Box>
      <div key={skill._id} className="skills__data" >
        <div className="skills__names">
          {listSkill[skill.icon]} &nbsp; &nbsp;
          <span className="skills__name">{skill.name}</span>
        </div>
        <div className="skills__percentage">{skill.percentage}</div>
        <div className="skill__bar" style={{ width: skill.percentage + '%' }}></div>

      </div >
      <Box sx={{ display: 'flex' }} mb={3}>

        <Box >
          <Button sx={{ marginLeft: '24px' }} onClick={() => handleOpen(skill._id)} size="small" variant="outlined">Sửa
          </Button>
        </Box>
        <Box >
          <Button sx={{ marginLeft: '24px' }} onClick={() => handleOpen(skill._id)} size="small" variant="outlined">Xóa
          </Button>
        </Box>
      </Box>
    </Box >
  );
}
