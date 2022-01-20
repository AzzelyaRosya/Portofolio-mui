import React from 'react';
import { Typography, Container, Grid, Box } from '@mui/material';
import jelss from '../img/jelss.png';
import Button from '@mui/material/Button';

export default function Banner() {
  return (
    <div className="banner">
      <Container maxWidth="xl" style={{ marginTop: '55px' }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} align="center" item spacing={5}>
              <img src={jelss} alt="azzelyarosya" width={300} />
              <Typography variant="h3" style={{ marginTop: '10px', fontWeight: 'bold', color: '#4d2e00' }}>
                Azzelya Rosya
              </Typography>
              <Typography variant="h5" style={{ marginTop: '15px' }}>
                Junior Web Development
              </Typography>
              <Button variant="contained" className="btn" style={{ marginTop: '15px' }} sx={{ bgcolor: '#cc7a00' }}>
                Hire
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
