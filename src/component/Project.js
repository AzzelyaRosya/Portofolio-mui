import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography, Grid, Box, CardActionArea, CardMedia, Container } from '@mui/material';
import perpus from '../img/perpus.png';
import kalku from '../img/kalku.png';

export default function Project() {
  return (
    <Container>
      <Typography variant="h3" align="center" style={{ fontWeight: 'bold', color: '#4d2e00', marginTop: '5px' }}>
        Project
      </Typography>
      <Grid container spacing={5} justifyContent="center" style={{ marginTop: '-20px' }}>
        <Grid item>
          {/* Card 1 */}
          <Card data-aos="fade-right" sx={{ maxWidth: 450, backgroundColor: '#ffebcc' }}>
            <CardActionArea>
              <CardMedia component="img" height="450" image={perpus} alt="perpus" className="card-media" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Perputakaan Online
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Ini merupakan Perpustakaan Online Sederhana menggunakan HTML, CSS, Javascript.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
          {/* Card 2 */}
          <Card data-aos="fade-left" sx={{ maxWidth: 450, backgroundColor: '#ffebcc' }}>
            <CardActionArea>
              <CardMedia component="img" height="450" image={kalku} alt="kalku" className="card-media" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Kalkulator
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Ini merupakan sebuah Kalkulator Sederhana yang dibuat menggunakan Bahasa Pemrograman PHP.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
