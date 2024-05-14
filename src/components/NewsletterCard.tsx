// src/components/NewsletterCard.tsx
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';

interface Props {
  title: string;
  description: string;
  imageSrc: string;
  buttonText: string;
}

const NewsletterCard: React.FC<Props> = ({ title, description, imageSrc, buttonText }) => {
  return (
    <Card sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', border: 'none', boxShadow: 'none', borderRadius: 0, width: '100%'}}>
      <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <CardMedia
          component="img"
          height="201"
          image={imageSrc}
          alt={title}
        />
        <Typography style={{ textShadow: "2px 2px 3px rgba(0, 0, 0, 0.3)", position: "absolute", color: "white", marginBottom: 0}} textAlign="center" gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </div>
      <CardContent sx={{textAlign: 'center'}}>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
          <Button size="small" color={buttonText === "S'inscrire" ? 'primary' : 'secondary'} variant="contained" sx={{marginTop: '15px'}}>
            {buttonText}
          </Button>
      </CardContent>
      {/* <CardActions sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddinTop: 0}}>
      </CardActions> */}
    </Card>
  );
};

export default NewsletterCard;
