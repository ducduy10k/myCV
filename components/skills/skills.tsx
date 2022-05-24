import { Skill } from '@/models';
import { Divider } from '@mui/material';
import React, { Fragment } from 'react';
import { SkillItem } from './skill-item';
import { Box, Container, Chip, Stack, Typography, List, Button, Modal, TextField } from '@mui/material';


export interface ICompanyListProps {
  skills: Skill[];
  handleOpen(id: string): void;
  handleDelete(id: string): void;
}
export function SkillList({ skills, handleOpen, handleDelete }: ICompanyListProps) {
  return (
    <Box pt={{ xs: 4, md: 18 }} pb={{ xs: 7, md: 9 }}>
      <Container>
        {skills.map((skill: any) => (
          <SkillItem key={skill._id} skill={skill} handleOpen={handleOpen} handleDelete={handleDelete} />
        ))}
      </Container>
    </Box>
  );
}
