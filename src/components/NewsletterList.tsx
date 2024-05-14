import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import NewsletterCard from './NewsletterCard';
import { fetchNewsletters } from '../utils/fetchNewsletters';
import { NewsletterItem } from '../models/newsletters';
import { useUser } from '../mocks/userMock';

const NewsletterList: React.FC = () => {
  const [newsletters, setNewsletters] = useState<NewsletterItem[]>([]);
  const user = useUser();

  useEffect(() => {
    const getNewsletters = async () => {
      const data = await fetchNewsletters();
      setNewsletters(data);
    };
    getNewsletters();
  }, []);

  const getButtonText = (subscriptions: string[]) => {
    if (subscriptions.length === 0) return "S'inscrire";
    return subscriptions.includes(user.subscriptions[0]) ? "S'abonner" : "S'inscrire";
  };

  return (
    <Grid container spacing={4} alignItems="stretch" rowSpacing={1}>
      {newsletters.map((item) => (
        <Grid display="flex" item xs={12} sm={6} md={4} key={item.id}>
          <NewsletterCard
            key={item.id}
            title={item.title}
            imageSrc={item.image}
            description={item.description}
            buttonText={getButtonText(item.subscriptions)}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default NewsletterList;
