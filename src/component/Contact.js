import React from 'react';
import { Typography, Grid, Button, CardContent, Card, TextField } from '@mui/material';

export default function Contact() {
  return (
    <div className="contact">
      <Typography gutterBottom variant="h3" align="center" style={{ fontWeight: 'bold', color: '#4d2e00', marginTop: '5px' }}>
        Contact
      </Typography>
      <Grid>
        {/* <Card style={{ maxWidth: 450, padding: '20px 5px', margin: '0 auto' }}>
          <CardContent> */}
        <form>
          <Grid container spacing={1} align="center" style={{ marginTop: '50px' }}>
            <Grid item xs={12}>
              <TextField placeholder="Enter name" label="Name" variant="standard" color="warning" style={{ width: '400px' }} required />
            </Grid>
            <Grid item xs={12}>
              <TextField type="email" placeholder="Enter email" label="Email" variant="standard" color="warning" style={{ width: '400px' }} required />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Message" multiline rows={5} placeholder="Type your message here" variant="standard" color="warning" style={{ width: '400px' }} required />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" className="btn" variant="contained" sx={{ bgcolor: '#cc7a00' }}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
        {/* </CardContent>
        </Card> */}
      </Grid>
    </div>
  );
}
