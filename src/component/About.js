import React from 'react';
import { Box, Typography, Container, Button, Grid } from '@mui/material';
import ajjelkeren from '../img/ajjelkeren.png';

export default function About() {
  return (
    <Container maxWidth="xl" style={{ marginTop: '25px' }}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h3" align="center" style={{ fontWeight: 'bold', marginBottom: '10px' }}>
          About me!
        </Typography>
        <Grid container spacing={2}>
          <Grid className="aboutisi" item xs={12} align="center" item spacing={5}>
            <img src={ajjelkeren} alt="azzelberdiri" width={325} />
            <Typography variant="h4" align="center">
              Hai, saya Azzelya Rosya Denovya.
            </Typography>
            <Typography variant="h6" align="center">
              Saya berasal dari SMKN 1 Kota Bekasi. <br /> Jurusan saya adalah Rekayasa Perangkat Lunak, <br />
              merupakan jurusan Programming dan menyukai lebih dalam tentang Front-end Development.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
