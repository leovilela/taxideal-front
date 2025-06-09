import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface User {
  id: string;
  name: string;
  email: string;
}

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const stored = localStorage.getItem('user');
  const user: User | null = stored ? JSON.parse(stored) : null;

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 8,
          p: 4,
          boxShadow: 3,
          borderRadius: 2,
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" gutterBottom>
          {user ? `Bem-vindo, ${user.name}!` : 'Bem-vindo!'}
        </Typography>
        <Button variant="outlined" onClick={handleLogout}>
          Sair
        </Button>
      </Box>
    </Container>
  );
};

export default DashboardPage;
