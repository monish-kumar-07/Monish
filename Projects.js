// src/components/Projects.js

import React from 'react';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';

const projects = [
  { title: 'Project 1', description: 'Description of project 1' },
  { title: 'Project 2', description: 'Description of project 2' },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        My Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5">
                  {project.title}
                </Typography>
                <Typography variant="body2">
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
