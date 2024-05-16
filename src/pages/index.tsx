import React from 'react';
import Grid from '@mui/material/Grid';
import NewsletterList from '../components/NewsletterList';
import GlobalStyle from '../styles/globalStyles';
import NewsletterTitle from '@/components/NewsletterTitle';
import { Paper, Typography } from '@mui/material';

const IndexPage: React.FC = () => {
  return (
    <Grid maxWidth="lg" container justifyContent="center" margin="auto" padding={5}>
        <GlobalStyle />
        <Grid container marginBottom={3}>
          <Paper square={false} elevation={0} style={{width: '100%', padding: 35, backgroundColor: '#F4F4F4', textAlign: 'center'}}>
            <Typography variant='h5' component='h1' textTransform='uppercase' fontWeight={600} marginBottom={1}>Newsletters</Typography>
            <Typography variant='body2'>
              Dans cette page, vous retrouvez l’ensemble des newsletters des Echos et des marques satellites. Ainsi, vous pouvez découvrir toutes nos newsletters selon vos centres d’intérêt et gérer plus facilement l’inscription à vos newsletters.
            </Typography>
          </Paper>
        </Grid>
        <Grid container>
          <NewsletterTitle title="LES ECHOS" />
        </Grid>
        <NewsletterList />
        <Grid container>
          <NewsletterTitle title="INVESTIR" />
        </Grid>
        <NewsletterList />
    </Grid>
  );
};

export default IndexPage;
