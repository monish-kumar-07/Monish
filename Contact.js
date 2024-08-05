// src/components/Contact.js

import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const Contact = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Contact Me
      </Typography>
      <Box component="form" sx={{ mt: 2 }}>
        <TextField label="Name" fullWidth margin="normal" />
        <TextField label="Email" type="email" fullWidth margin="normal" />
        <TextField label="Message" multiline rows={4} fullWidth margin="normal" />
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Send
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;
