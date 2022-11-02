import React from 'react';

import {Box, Avatar, Button, Card, CardMedia, CardContent, styled, Typography, IconButton} from "@mui/material";
import {user} from '../../utils/user';
import foto from "../../images/foto.jpg";
import idea1 from "../../images/idea1.svg";
import like from "../../images/like.svg";
import dislike from "../../images/dislike.svg";

const FilterButton = styled(Button)(() => ({
  backgroundColor: "#36A9E1",
  textTransform: 'none',
  color: "#fff",
  width: "110px",
  height: "20px",
  borderRadius: "10px",
  fontSize: "12px",
  cursor: 'default',
  '&:hover': {
    backgroundColor: "#36A9E1",
    boxShadow: 'none',
  }
}));

function Idea({idea}) {
  return (
    <Box sx={{width: "680px",  
      border: "1px solid #EAEAEA", 
      borderRadius: "20px", 
      background: "#FFFFFF", 
      padding: "30px 23px", 
      boxSizing: "border-box"
      }}>
        <Card sx={{boxShadow:'0'}}>
          <Box sx={{display:'flex', alignItems:'center'}}>
            <Avatar
              alt={user.name}
              src={foto}
              sx={{ width: "45px", height: "45px", borderRadius: "50%"}}
            />
            <Typography sx={{ml:'15px', fontWeight: '600', fontSize:'16px'}}>{user.name}</Typography>
            <Typography sx={{ml:'5px', fontSize:'14px', color: '#7E7E7E'}}>cегодня в 18:45</Typography>
          </Box>
          <Typography sx={{fontSize: '24px',
            lineHeight: '28px', mt:'23px',mb:'5px'}}>Как создать свое идеальное путешествие при помощи одного сайта?
          </Typography>
          <Box sx={{display:'flex'}}>
            <FilterButton>Туристическое</FilterButton>
            <FilterButton sx={{ml:'10px'}}>Популярное</FilterButton>
          </Box>
          <CardMedia
            component="img"
            height="414"
            image={idea1}
            alt="фото идеи"
            sx={{mt:"15px", mb:'36px'}}
          />
          <CardContent>
            <Typography variant="body2">
              Мы предлагаем новый продукт, который поможет создать каждому пользователю свое идеальное 
              путешествие. Данный ресурс на основе машинного обучения и поддержке нейронных сетей сможет 
              по запросу пользователя подобрать транспорт, отель и развлечения, чтобы сэкономить время и 
              нервы на этот непростой процесс. Присоединяйся!
            </Typography>
          </CardContent>
          <Box sx={{display:'flex', alignItems:'center'}}>
            <IconButton aria-label="add to favorites">
              <img src={like} alt='Нравится' />
            </IconButton>
            <Typography >123</Typography>
            <IconButton aria-label="share">
            <img src={dislike} alt='Не нравится' />
            </IconButton>
            <Typography>12</Typography>
          </Box>
        </Card>
    </Box>
  )
}
export default Idea;