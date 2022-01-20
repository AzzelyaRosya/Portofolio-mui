import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography, Grid, Box, CardActionArea } from '@mui/material';
import perpus from '../img/perpus.png';

export default function Project() {
  return (
    <Card sx={{ maxWidth: 300, bgcolor: '#ffe0b3' }} align="center">
      <CardActionArea>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} align="center" item spacing={5}>
              <img src={perpus} alt="azzelberdiri" width={400} />
            </Grid>
          </Grid>
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Perpustakaan Online
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Ini merupakan Perpustakaan Online Sederhana menggunakan HTML, CSS, Javascript.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
