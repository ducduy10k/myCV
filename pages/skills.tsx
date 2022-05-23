import { MainLayout } from '@/components/layout';
import { SkillList } from '@/components/skills';
import { SkillItem } from '@/components/skills/skill-item';
import { Skill } from '@/models';
import { Button } from '@mui/material';
import React, { useState } from 'react';
import { skillApi } from '@/api-client/skill-api';

export interface IBlogPageProps {}

export default function BlogPage(props: IBlogPageProps) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenModal = (id: string) => {
    handleOpen();
  };
  const [skillList, setSkillList] = React.useState<Skill[]>([]);
  React.useEffect(() => {
    skillApi.getTop10Skill().then((data: any) => {
      setSkillList(data);
    });
  }, []);

  return (
    <div>
      <Button sx={{ marginLeft: '73%', marginBottom: '32px' }} size="small" variant="outlined">
        thêm skill
      </Button>
      <SkillList skills={skillList} handleOpen={handleOpenModal} />
    </div>
  );
}

BlogPage.Layout = MainLayout;
BlogPage.isPrivate = true;
