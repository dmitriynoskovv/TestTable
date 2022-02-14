import React from 'react';
import { Box, Typography } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from 'pages/NotFound';
import './App.css';
import { NewsList } from 'pages/NewsList';
import { NewsComments } from 'pages/NewsComments';

export const App = () => {
  return (
    <Box>
      <Box sx={{ mx: 15 }}>
        <header>
          <Typography variant="h3" align="center" sx={{ p: 1 }}>
            Hack News
          </Typography>
        </header>

        <Routes>
          <Route path="" element={<NewsList />} />
          <Route path="/:id" element={<NewsComments />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>
    </Box>
  );
};
