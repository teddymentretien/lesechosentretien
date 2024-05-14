import React from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import NewsletterList from '../components/NewsletterList';
import GlobalStyle from '../styles/globalStyles';
import NewsletterTitle from '@/components/NewsletterTitle';

const Container = styled.div`
  padding: 16px;
`;

const Header = styled.h1`
  text-align: center;
`;

const IndexPage: React.FC = () => {
  return (
    <Grid maxWidth="lg" container justifyContent="center" margin="auto" padding={5}>
        <GlobalStyle />
        <NewsletterTitle title="LES ECHOS" />
        <NewsletterList />
    </Grid>
  );
};

export default IndexPage;
