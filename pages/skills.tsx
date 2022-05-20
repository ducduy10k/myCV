import { MainLayout } from '@/components/layout';
import { SkillList } from '@/components/skills';
import { SkillItem } from '@/components/skills/skill-item';
import { Button } from '@mui/material';
import React, { useState } from 'react';


export interface IBlogPageProps {
}

export default function BlogPage(props: IBlogPageProps) {
  const [skillList, setSkillList] = useState([
    {
      id: '1',
      name: 'Angular',
      level: '80%',
      desc: '1 năm kinh nghiệm và 3 dự án thực tế',
    },
    {
      id: '2',
      name: 'Reactjs',
      level: '90%',
      desc: '1 năm kinh nghiệm và 3 dự án thực tế',


    }])
  const [open, setOpen] = React.useState(false);


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenModal = (id: string) => {
    handleOpen();

  }
  return (
    <div>
      <Button sx={{ marginLeft: '73%', marginBottom: '32px' }} size="small" variant="outlined">thêm skill</Button>
      <SkillList skills={skillList} handleOpen={handleOpenModal} />
    </div >
  );
}

BlogPage.Layout = MainLayout