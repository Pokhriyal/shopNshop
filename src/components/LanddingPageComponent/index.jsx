import React from 'react';
import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
// import MultipleCarouselComponent from '../MultipleCarouselComponent';
// eslint-disable-next-line import/no-duplicates
import { Box, Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// eslint-disable-next-line import/no-duplicates
import { CardActionArea, Button, CardActions } from '@mui/material';
// eslint-disable-next-line import/no-duplicates
// import { Button } from '@mui/material';
// import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import Carousel from 'react-elastic-carousel';
import Container from '@mui/material/Container';

// import { Link } from 'react-router-dom';
import HeroBannerComponent from './HeroBannerComponent';
import getAllProducts from '../../redux/actions/productAction';
import { BRANDS, ICONS, IMAGES } from '../../shared/assets';
import './style.css';

export default function LanddingPageComponent() {
  const dispatch = useDispatch();
  const carouselRef = React.useRef(null);
  let resetTimeout;

  // const product = useSelector((state) => state.allProductReducer);
  React.useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <>
      <HeroBannerComponent />
      <Box pt={8} pb={8}>
        <Container>
          <Grid container>
            <Grid item sm={12}>
              <Typography variant="h4" component="h4" align="center">
                Why millions of Indians trust Credmudra for short term loan?
              </Typography>
            </Grid>
          </Grid>
          <Grid container mt={5}>
            <Grid item sm={3}>
              <Box
                sx={{
                  padding: '15px',
                  borderRight: '1px solid #d9d9d9',
                  minHeight: '180px',
                  '&:hover': {
                    boxShadow: '0px 0px 50px #5999a936',
                  },
                }}
              >
                <Typography variant="h6" component="p" align="center" pt={4}>
                  90%+ Disbursal Rate
                </Typography>
                <Typography
                  variant="p"
                  component="p"
                  align="center"
                  sx={{ pt: 4, color: 'gray' }}
                >
                  We work to match you with lenders that align with your needs,
                  increasing your chances of loan approval.
                </Typography>
              </Box>
            </Grid>
            <Grid item sm={3}>
              <Box
                sx={{
                  padding: '15px',
                  borderRight: '1px solid #d9d9d9',
                  minHeight: '180px',
                  '&:hover': {
                    boxShadow: '0px 0px 50px #5999a936',
                  },
                }}
              >
                <Typography variant="h6" component="p" align="center" mt={4}>
                  100% Paperless
                </Typography>
                <Typography
                  variant="p"
                  component="p"
                  align="center"
                  sx={{ pt: 4, color: 'gray' }}
                >
                  Apply for a loan sitting in the comfort of your home, as we
                  are 100% digital.
                </Typography>
              </Box>
            </Grid>
            <Grid item sm={3}>
              <Box
                sx={{
                  padding: '15px',
                  borderRight: '1px solid #d9d9d9',
                  minHeight: '180px',
                  '&:hover': {
                    boxShadow: '0px 0px 50px #5999a936',
                  },
                }}
              >
                <Typography variant="h6" component="p" align="center" mt={4}>
                  Prequalified Offers
                </Typography>
                <Typography
                  variant="p"
                  component="p"
                  align="center"
                  sx={{ pt: 4, color: 'gray' }}
                >
                  Check offer rates without having to worry about the impact on
                  your credit score.
                </Typography>
              </Box>
            </Grid>
            <Grid item sm={3}>
              <Box
                sx={{
                  padding: '15px',
                  minHeight: '180px',
                  '&:hover': {
                    boxShadow: '0px 0px 50px #5999a936',
                  },
                }}
              >
                <Typography variant="h6" component="p" align="center" mt={4}>
                  Tailor Your Loan
                </Typography>
                <Typography
                  variant="p"
                  component="p"
                  align="center"
                  sx={{ pt: 4, color: 'gray' }}
                >
                  Customise your loan amount from INR 1000 to INR 1,00,000
                  within the tenure of 3 months to 2 years.
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid container mt={5}>
            <Grid item sm={3}>
              <Box
                sx={{
                  padding: '15px',
                  borderRight: '1px solid #d9d9d9',
                  minHeight: '180px',
                  '&:hover': {
                    boxShadow: '0px 0px 50px #5999a936',
                  },
                }}
              >
                <Typography variant="h6" component="p" align="center">
                  Instant Approval
                </Typography>
                <Typography
                  variant="p"
                  component="p"
                  align="center"
                  sx={{ pt: 4, color: 'gray' }}
                >
                  Online approval within 48 hours with less documentation to
                  those needing the loan urgently.
                </Typography>
              </Box>
            </Grid>
            <Grid item sm={3}>
              <Box
                sx={{
                  padding: '15px',
                  borderRight: '1px solid #d9d9d9',
                  minHeight: '180px',
                  '&:hover': {
                    boxShadow: '0px 0px 50px #5999a936',
                  },
                }}
              >
                <Typography variant="h6" component="p" align="center">
                  No geographical limitations*
                </Typography>
                <Typography
                  variant="p"
                  component="p"
                  align="center"
                  sx={{ pt: 4, color: 'gray' }}
                >
                  The platform is also accessible in many remote and underserved
                  areas with an internet connection.
                </Typography>
              </Box>
            </Grid>
            <Grid item sm={3}>
              <Box
                sx={{
                  padding: '15px',
                  borderRight: '1px solid #d9d9d9',
                  minHeight: '180px',
                  '&:hover': {
                    boxShadow: '0px 0px 50px #5999a936',
                  },
                }}
              >
                <Typography variant="h6" component="p" align="center">
                  No Hidden Charges
                </Typography>
                <Typography
                  variant="p"
                  component="p"
                  align="center"
                  sx={{ pt: 4, color: 'gray' }}
                >
                  Our process is transparent and fair, as there are no hidden
                  charges that may surprise you
                </Typography>
              </Box>
            </Grid>
            <Grid item sm={3}>
              <Box
                sx={{
                  padding: '15px',
                  minHeight: '180px',
                  '&:hover': {
                    boxShadow: '0px 0px 50px #5999a936',
                  },
                }}
              >
                <Typography variant="h6" component="p" align="center">
                  Safe and Secure
                </Typography>
                <Typography
                  variant="p"
                  component="p"
                  align="center"
                  sx={{ pt: 4, color: 'gray' }}
                >
                  We follow all the necessary security protocols, and data
                  privacy standards to make sure that your information is safe
                  and secure
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        style={{
          backgroundColor: '#10162ce6',
          minHeight: '500px',
        }}
      >
        <Container>
          <Grid container spacing={2} pt={8}>
            <Grid item sm={12}>
              <Typography
                variant="h4"
                align="center"
                sx={{ color: '#fff', pb: 5 }}
              >
                Start your loan journey with us?
              </Typography>
              <Grid container>
                <Grid item sm={4} xs={12}>
                  <Box
                    style={{
                      textAlign: 'center',
                    }}
                  >
                    <img
                      src={ICONS.findALeader}
                      alt="find-a-leader"
                      width="150px"
                    />
                    <Typography
                      variant="h5"
                      align="center"
                      sx={{ color: '#fff' }}
                    >
                      Find a lender
                    </Typography>
                  </Box>
                </Grid>
                <Grid item sm={4} xs={12}>
                  <Box
                    style={{
                      textAlign: 'center',
                    }}
                  >
                    <img
                      src={ICONS.craditScore}
                      alt="cardit-score"
                      width="170px"
                    />
                    <Typography
                      variant="h5"
                      align="center"
                      sx={{ color: '#fff' }}
                    >
                      Check credit score
                    </Typography>
                  </Box>
                </Grid>
                <Grid item sm={4} xs={12}>
                  <Box
                    style={{
                      textAlign: 'center',
                    }}
                  >
                    <img
                      src={ICONS.CalculateEmi}
                      alt="calculate-emi"
                      width="150px"
                    />
                    <Typography
                      variant="h5"
                      align="center"
                      sx={{ color: '#fff' }}
                    >
                      Calculate EMI
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          display: {
            md: 'block',
            xs: 'none',
          },
          minHeight: '120px',
          backgroundColor: '#fff',
        }}
      >
        <Container>
          <Typography variant="h4" align="center" sx={{ color: '#000', pt: 5 }}>
            Our Lending Partners
          </Typography>

          <Carousel
            ref={carouselRef}
            enableAutoPlay
            itemsToShow={4}
            autoPlaySpeed={5000}
            showArrows={false}
            onNextEnd={({ index }) => {
              clearTimeout(resetTimeout);
              if (index + 1 === 2) {
                resetTimeout = setTimeout(() => {
                  carouselRef.current.goTo(0);
                }, 3000); // same time
              }
            }}
            className="brand-carausal"
          >
            <Box>
              <img
                src={BRANDS.foxhub}
                alt="foxhub"
                width="170px"
                style={{ mixBlendMode: 'luminosity' }}
              />
            </Box>
            <Box>
              <img
                src={BRANDS.treva}
                alt="foxhub"
                width="170px"
                style={{ mixBlendMode: 'luminosity' }}
              />
            </Box>
            <Box>
              <img
                src={BRANDS.hexa}
                alt="foxhub"
                width="170px"
                style={{ mixBlendMode: 'luminosity' }}
              />
            </Box>
            <Box>
              <img
                src={BRANDS.cirele}
                alt="foxhub"
                width="170px"
                style={{ mixBlendMode: 'luminosity' }}
              />
            </Box>
            <Box>
              <img
                src={BRANDS.logobrand}
                alt="foxhub"
                width="170px"
                style={{ mixBlendMode: 'luminosity', marginTop: '8px' }}
              />
            </Box>
          </Carousel>
        </Container>
      </Box>
      <Box
        sx={{
          display: {
            md: 'none',
            xs: 'block',
          },
          minHeight: '120px',
          backgroundColor: '#8ed0de',
        }}
      >
        <Container>
          <Typography variant="h4" align="center" sx={{ color: '#fff', pt: 5 }}>
            Our Lending Partners
          </Typography>
          <Carousel
            ref={carouselRef}
            enableAutoPlay
            itemsToShow={1}
            autoPlaySpeed={5000}
            showArrows={false}
            onNextEnd={({ index }) => {
              clearTimeout(resetTimeout);
              if (index + 1 === 2) {
                resetTimeout = setTimeout(() => {
                  carouselRef.current.goTo(0);
                }, 3000); // same time
              }
            }}
          >
            <Box>
              <img src={BRANDS.foxhub} alt="foxhub" width="170px" />
            </Box>
            <Box>
              <img src={BRANDS.treva} alt="foxhub" width="170px" />
            </Box>
            <Box>
              <img src={BRANDS.hexa} alt="foxhub" width="170px" />
            </Box>
            <Box>
              <img src={BRANDS.cirele} alt="foxhub" width="170px" />
            </Box>
            <Box>
              <img src={BRANDS.logobrand} alt="foxhub" width="170px" />
            </Box>
          </Carousel>
        </Container>
        <Box
          sx={{
            minHeight: '300px',
            backgroundColor: '#8ed0de',
          }}
        >
          <Container>
            <Typography>Start your loan journey with us?</Typography>
            {/* <Card></Card> */}
          </Container>
        </Box>
      </Box>

      <Box pt={8} sx={{ backgroundColor: '#f5f5f5', minHeight: '500px' }}>
        <Container>
          <Grid container>
            <Grid item xs={12}>
              <Typography
                variant="h4"
                align="center"
                sx={{ color: '#000', paddingBottom: '2rem' }}
              >
                Know more about short term loans?
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card sx={{ maxWidth: 345 }} elevation={0}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="150"
                    image={IMAGES.cEmi}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Easy way to calculate interest on a loan
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    type="link"
                    href="http://167.71.233.181:5656/"
                    target="_blank"
                  >
                    Read More ...
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card sx={{ maxWidth: 345 }} elevation={0}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="150"
                    image={IMAGES.carLoan}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      For Car auto you will get 90% loan amount
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    type="link"
                    href="http://167.71.233.181:5656/"
                    target="_blank"
                  >
                    Read More ...
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card sx={{ maxWidth: 345 }} elevation={0}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="150"
                    image={IMAGES.healthPic}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Family Budget Solutions and Secure Your Future
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    type="link"
                    href="http://167.71.233.181:5656/"
                    target="_blank"
                  >
                    Read More ...
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
