import * as React from 'react';
import {
  Container,
  Link,
  Breadcrumbs,
  Typography,
  Box,
  Grid,
  Stack,
  Rating,
  Divider,
  Paper,
  Button,
  ImageList,
  ImageListItem,
  TextField,
} from '@mui/material';

import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';

const commonStyles = {
  width: '2rem',
  height: '2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 1,
  bgcolor: 'background.paper',
  borderColor: 'gray',
  color: 'gray',
  borderRadius: '50%',
  cursor: 'pointer',
};

const returnPolicy = [
  '100% Original Products',
  'Pay on delivery might be available',
  'Easy 30 days returns and exchanges',
  'Try & Bu might be available',
];

const selectSize = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
];

function handleClick(event) {
  event.preventDefault();
  // console.info('You clicked a breadcrumb.');
}
export default function ProductDetail() {
  return (
    <Container maxWidth="false">
      <div role="presentation" onClick={handleClick}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="/">
            Clothing
          </Link>
          <Link underline="hover" color="inherit" href="/">
            Man Clothing
          </Link>
          <Link underline="hover" color="inherit" href="/">
            T-Shirts
          </Link>
          <Typography color="text.primary">More By Roadster</Typography>
        </Breadcrumbs>
      </div>
      <Box sx={{ marginTop: 4 }}>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
          <Grid xs={12} sm={5}>
            <ImageList sx={{ width: 480, height: 500 }}>
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
          <Grid xs={12} sm={7}>
            <Typography variant="h6" gutterBottom>
              Roadster
            </Typography>
            <Typography variant="body2" gutterBottom>
              subtitle1. Lorem ipsum dolor
            </Typography>
            <Stack spacing={1} mb={1}>
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            </Stack>
            <Divider />
            <Typography variant="body2" gutterBottom mt={1}>
              Rs. 324 MRP Rs.499 (35% OFF)
            </Typography>
            <Typography variant="caption" gutterBottom mt={1}>
              Inclusive of all taxes
            </Typography>
            <Paper elevation={0}>
              <Typography variant="overline">Select Size</Typography>
              <Stack direction="row" spacing={2} mt={2} mb={2}>
                {selectSize.map((selectItem) => (
                  <Box key={selectItem} sx={{ ...commonStyles }}>
                    <Typography variant="overline">{selectItem}</Typography>
                  </Box>
                ))}
              </Stack>
            </Paper>
            <Stack direction="row" spacing={2} mt={1} mb={2}>
              <Button variant="contained" startIcon={<ShoppingBagIcon />}>
                ADD TO BAG
              </Button>
              <Button variant="outlined" startIcon={<FavoriteBorderIcon />}>
                WISHLIST
              </Button>
            </Stack>
            <Divider />
            <Box elevation={0} mt={2}>
              <Stack direction="row" alignItems="center" gap={1}>
                <Typography variant="caption" gutterBottom mt={1}>
                  DELIVERY OPTIONS
                </Typography>
                <LocalShippingOutlinedIcon
                  sx={{ color: '#212121', width: '1rem' }}
                />
              </Stack>
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  label="Enter pincode"
                  variant="outlined"
                  id="outlined-basic"
                  size="small"
                />
              </Box>
              <Typography
                variant="caption"
                gutterBottom
                mt={1}
                mb={2}
                component="p"
              >
                Please enter PIN code to check delivery time & Pay Availabity
              </Typography>
              {returnPolicy.map((item) => (
                <Typography
                  key={item}
                  variant="caption"
                  gutterBottom
                  mt={0}
                  component="p"
                >
                  {item}
                </Typography>
              ))}
            </Box>
            <Grid elevation={0} component="div" mt={3}>
              <Stack direction="row" alignItems="center" gap={1}>
                <Typography variant="button" gutterBottom mt={1} component="p">
                  PRODUCT DETAILS
                </Typography>
                <ContentCopyOutlinedIcon
                  sx={{ color: '#212121', width: '1rem' }}
                />
              </Stack>
              <Typography variant="caption" component="p">
                Khaki solid opaque Casual shirt, has a spread collar, button
                placket, 2 pockets, long regular sleeves, curved hem
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
