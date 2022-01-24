import React from 'react';
import { Box, Typography, Container, Button, Grid, Card, CardActionArea, CardMedia, CardContent } from '@mui/material';

import ajjelkeren from '../img/ajjelkeren.png';

export default function About() {
  return (
    <Container data-aos="zoom-in" maxWidth="xl" style={{ marginTop: '10px' }}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h3" align="center" style={{ fontWeight: 'bold', marginBottom: '10px', color: '#4d2e00' }}>
          About me!
        </Typography>
        <Grid container spacing={2}>
          <Grid className="aboutisi" item xs={12} align="center" item spacing={5}>
            <img src={ajjelkeren} alt="azzelberdiri" width={325} />
            <Typography variant="h4" align="center">
              Hai, saya <span style={{ fontWeight: 'bold' }}>Azzelya Rosya Denovya.</span>
            </Typography>
            <Typography variant="h6" align="center" style={{ marginBottom: '30px' }}>
              Saya berasal dari SMKN 1 Kota Bekasi. <br /> Jurusan saya adalah Rekayasa Perangkat Lunak, <br />
              merupakan jurusan Programming dan menyukai tentang Front-end Development.
            </Typography>
          </Grid>
        </Grid>

        <Card className="skills" sx={{ maxWidth: 345 }} justifyContent="center" align="center" style={{ margin: 'auto', backgroundColor: '#ffebcc', color: '#4d2e00' }}>
          <CardActionArea>
            <CardMedia />
            <CardContent>
              <Typography variant="h3" align="center" style={{ fontWeight: 'bold', marginBottom: '10px', color: '#4d2e00', marginTop: '10px' }}>
                Skills
              </Typography>
              <Grid item xs={10} className="progress" align="center">
                <Typography variant="body1" sx={{ fontSize: 20 }}>
                  <i class="uil uil-html5"></i>
                  HTML : 90%
                </Typography>
                <progress className="html" value="90" max="100" />
              </Grid>
              <Grid item xs={10} className="progress" align="center">
                <Typography variant="body1" sx={{ fontSize: 20 }}>
                  <i class="uil uil-css3-simple"></i>
                  CSS : 85%
                </Typography>
                <progress id="file" value="85" max="100" />
              </Grid>
              <Grid item xs={10} className="progress" align="center">
                <Typography variant="body1" sx={{ fontSize: 20 }}>
                  <i class="uil uil-java-script"></i>
                  JS : 55%
                </Typography>
                <progress id="file" value="55" max="100" />
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Container>
  );
}
