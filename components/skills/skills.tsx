import { Skill } from '@/models';
import { Divider } from '@mui/material';
import React, { Fragment } from 'react';
import { SkillItem } from './skill-item';
import { Box, Chip, Stack, Typography, List, Button, Modal, TextField } from '@mui/material';


export interface ICompanyListProps {
  skills: Skill[];
  handleOpen(id: string): void;
}

export function SkillList({ skills, handleOpen }: ICompanyListProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', }}>
      <Box>
        {
          skills?.map((skill) => (
            <Fragment key={skill.id}>
              <SkillItem skill={skill} handleOpen={handleOpen}></SkillItem>
              <Divider sx={{ mt: 2, mb: 4 }} />
            </Fragment>
          ))
        }
      </Box >
    </Box>
  );
}
