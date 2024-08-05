// src/components/About.js

import React from 'react';
import { Container, Typography } from '@mui/material';

const About = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1">
        I am a passionate developer with experience in creating dynamic web applications...
      </Typography>
    </Container>
  );
};

export default About;
