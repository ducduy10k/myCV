import { MainLayout } from '@/components/layout';
import { SkillList } from '@/components/skills';
import { SkillItem } from '@/components/skills/skill-item';
import { Skill } from '@/models';
import React, { useState } from 'react';

import { Box, Button, Container, Stack, Typography, Modal, TextField, Grid } from '@mui/material';
import { skillApi } from '@/api-client';

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
export interface IBlogPageProps {
}

export default function BlogPage(props: IBlogPageProps) {

  const [open, setOpen] = React.useState(false);
  const [_id, setId] = React.useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [name,setName] = React.useState('');
  const [level,setLevel] = React.useState('');
  const [desc,setDesc] = React.useState('');
  const [percentage,setPercentage] = React.useState('');
  var isEdit = true;
  const [skillList, setSkillList] = React.useState<Skill[]>([])
  React.useEffect(() => {
    skillApi.getTop10Skill().then((data: any) => {
      setSkillList(data);
    })
  }, [])

  const onChangeNameSkill = (e: any) => {
    setName(e.target.value || '')
  }
  const onChangeDescSkill = (e: any) => {
    setDesc(e.target.value || '')
  }
  const onChangeLevelSkill = (e: any) => {
    setLevel(e.target.value || '')
  }
  const onChangePercentageSkill = (e: any) => {
    setPercentage(e.target.value || '')

  }
  

  const handleOpenModalEdit = (id: string) => {
    const skill = skillList.find((skill: Skill) => skill._id === id);
    if (skill) {
      handleOpen();
      isEdit = true;
      setName(skill?.name || '');
      setDesc(skill?.desc || '');
      setLevel(skill?.level || '')
      setPercentage(skill?.percentage || '')
      setId(id);
    }
  };

  const handleEdit = () => {
    skillApi
      .updateSkill({
        _id: _id,
        name,
        desc,
        level,
        percentage,
        icon: name,
      })
      .then((data: any) => {
        handleClose();
        setSkillList([...skillList].map((skill) => {
          return (skill._id === _id) ? {
            _id: _id,
            name,
            desc,
            level,
            percentage,
            icon: name,
          } : skill
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleAdd = () => {
    skillApi
      .addSkill({
        _id: '',
            name,
            desc,
            level,
            percentage,
            icon: name,
      })
      .then((data: any) => {
        handleClose();
        const skill: Skill[] = [
          ...skillList,
          {
            _id: data._id,
            name,
            desc,
            level,
            percentage,
            icon: name,
          },
        ];
        setSkillList(skill);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleAddSkill = () => {
    isEdit = false;
    handleOpen();
    setName('');
    setDesc('');
    setLevel('');
    setPercentage('');
  };

  return (
    <div>
      <Button onClick={handleAddSkill} sx={{ marginLeft: '73%', marginBottom: '32px' }} size="small" variant="outlined">thêm skill</Button>
      <SkillList skills={skillList} handleOpen={handleOpenModalEdit} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component="form" sx={style}>
        <TextField
            required
            id="outlined-required"
            label="Kỹ năng"
            value={name}
            onChange={onChangeNameSkill}
            sx={{ marginBottom: '32px', }}
          />
           <TextField
            required
            id="outlined-required"
            label="Mô tả"
            value={desc}
            onChange={onChangeDescSkill}
            sx={{ marginBottom: '32px', }}
          />
           <TextField
            required
            id="outlined-required"
            label="Trình độ"
            value={level}
            onChange={onChangeLevelSkill}
            sx={{ marginBottom: '32px', }}
          />
          <TextField
            required
            id="outlined-required"
            label="Đánh giá"
            value={percentage}
            onChange={onChangePercentageSkill}
            sx={{ marginBottom: '32px', }}
          />
        {
            isEdit ? (<Button
              onClick={handleEdit}
              sx={{ marginLeft: '80%', marginTop: '70px' }}
              size="small"
              variant="outlined"
            >
              Sửa {' '}
            </Button>
            ) : (<Button
              onClick={handleAdd}
              sx={{ marginLeft: '80%', marginTop: '70px' }}
              size="small"
              variant="outlined"
            >
              Thêm{' '}
            </Button>)
          }
        </Box>
      </Modal>
    </div >
  );
}

BlogPage.Layout = MainLayout