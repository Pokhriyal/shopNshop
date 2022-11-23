import * as React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

import { IMAGES } from '../../shared/assets';

export default function HeroBannerComponent() {
  return (
    <Card sx={{ maxWidth: '100%' }}>
      <CardMedia
        component="img"
        height="400"
        image={IMAGES.heroBanner}
        alt="green iguana"
      />
    </Card>
  );
}
