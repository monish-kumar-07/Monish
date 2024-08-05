// src/components/Footer.js

import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 2, textAlign: 'center' }}>
      <Typography variant="body1">
        © 2024 My Portfolio
      </Typography>
    </Box>
  );
};

export default Footer;
