import { MainLayout } from '@/components/layout';
import { SkillList } from '@/components/skills';
import { SkillItem } from '@/components/skills/skill-item';
import { Skill } from '@/models';
import React, { useState } from 'react';
import { Box, Button, DialogTitle, DialogActions, DialogContent, Modal, TextField, Dialog, DialogContentText } from '@mui/material';
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
  const [openDialog, setOpenDialog] = React.useState(false);
  const [_id, setId] = React.useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => setOpenDialog(false);
  const [name, setName] = React.useState('');
  const [level, setLevel] = React.useState('');
  const [desc, setDesc] = React.useState('');
  const [percentage, setPercentage] = React.useState('');
  const isEdit = React.useRef(false);
  const [skillList, setSkillList] = React.useState<Skill[]>([])


  React.useEffect(() => {
    skillApi.getTop10Skill().then((data: any) => {
      setSkillList(data);
    });
  }, []);

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
  const handleOpenDelateDialog = (id: string) => {
    handleOpenDialog();
    setId(id);
  };

  const handleDeleteDialog = () => {
    skillApi
      .deleteSkill(
        _id
      )
      .then((data: any) => {
        handleCloseDialog();
        const skills = skillList.filter((skill: Skill) => skill._id !== _id);
        setSkillList(skills);
      })
      .catch((error) => {
        console.log(error);
      });
  }


  const handleOpenModalEdit = (id: string) => {
    const skill = skillList.find((skill: Skill) => skill._id === id);
    if (skill) {
      handleOpen();
      isEdit.current = true;
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
        _id: _id,
        name,
        desc,
        level: percentage,
        percentage: percentage,
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
            level: percentage,
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
    isEdit.current = false;
    handleOpen();
    setName('');
    setDesc('');
    setLevel('');
    setPercentage('');
  };

  return (
    <div>
      <Button onClick={handleAddSkill} sx={{ marginLeft: '73%', marginTop: '32px', }} size="small" variant="outlined">Thêm skill</Button>
      <SkillList skills={skillList} handleOpen={handleOpenModalEdit} handleDelete={handleOpenDelateDialog} />
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
            label="Level"
            value={percentage}
            onChange={onChangePercentageSkill}
            sx={{ marginBottom: '32px', }}
          />
          {
            isEdit.current ? (<Button
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
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Bạn có chắc chắn muốn xóa skill này?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Hủy</Button>
          <Button onClick={handleDeleteDialog} autoFocus>
            Đồng ý
          </Button>
        </DialogActions>
      </Dialog>
    </div >
  );
}

BlogPage.Layout = MainLayout;
BlogPage.isPrivate = true;
