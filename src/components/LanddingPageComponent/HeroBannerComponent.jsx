import * as React from 'react';
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-duplicates
import { Box, Button, Grid } from '@mui/material';
import Container from '@mui/material/Container';

// eslint-disable-next-line import/no-duplicates
import { Typography } from '@mui/material';
import { IMAGES } from '../../shared/assets';
// import HeroBannerStyles from './HeroBannerStyles';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 1 },
  { width: 1200, itemsToShow: 1 },
];

export default function HeroBannerComponent() {
  // const classes = HeroBannerStyles();
  const carouselRef = React.useRef(null);
  let resetTimeout;
  return (
    <Box sx={{ mt: 5, backgroundColor: '#f5f5f5', p: 5 }}>
      <Container sx={{ display: { xs: 'none', md: 'block' } }}>
        <Carousel
          breakPoints={breakPoints}
          ref={carouselRef}
          enableAutoPlay
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
          <Box style={{ width: '100%' }}>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              style={{ width: '100%' }}
            >
              <Box
                style={{
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}
                >
                  <Grid xs={12} md={4}>
                    {/* <Typography
                      component="h1"
                      style={{
                        fontSize: '35px',
                        color: '#333',
                        fontWeight: '600',
                      }}
                    >
                      Find a lender!
                    </Typography> */}
                    <Typography
                      fontWeight="bold"
                      color="#000"
                      component="h1"
                      style={{
                        fontSize: '25px',
                        color: '#333',
                        fontWeight: '600',
                        fontFamily: 'Inter',
                      }}
                    >
                      Your short Term Loan is just a match away!
                      <br />
                      On a Mission of financial inclusion for every Indian
                    </Typography>
                    <Link
                      to="/"
                      style={{ textDecoration: 'none', color: '#000' }}
                    >
                      <Button
                        className="classes.headingText"
                        style={{
                          backgroundColor: 'rgb(44 182 95)',
                          borderRadius: '3rem',
                          fontSize: '14px',
                          fontWeight: '600',
                          color: '#fff',
                          width: '15rem',
                          padding: '12px',
                          // boxShadow: '#56b46a 2px 4px 0px 1px',
                          marginTop: '15px',
                        }}
                      >
                        Find a lender!
                      </Button>
                    </Link>
                  </Grid>
                  <Grid xs={12} md={8}>
                    <img
                      width={500}
                      src={IMAGES.dhonibanner}
                      style={{ mixBlendMode: 'multiply' }}
                      alt="Blog"
                    />
                  </Grid>
                </div>
              </Box>
            </Grid>
          </Box>
          <Box style={{ width: '100%' }}>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              style={{ width: '100%' }}
            >
              <Box
                style={{
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}
                >
                  <Grid xs={12} md={4}>
                    {/* <Typography
                      component="h1"
                      style={{
                        fontSize: '35px',
                        color: '#333',
                        fontWeight: '600',
                      }}
                    >
                      Find a lender!
                    </Typography> */}
                    <Typography
                      fontWeight="bold"
                      color="#000"
                      component="h1"
                      style={{
                        fontSize: '25px',
                        color: '#333',
                        fontWeight: '600',
                        fontFamily: 'Inter',
                      }}
                    >
                      Your short Term Loan is just a match away!
                      <br />
                      On a Mission of financial inclusion for every Indian
                    </Typography>
                    <Link
                      to="/"
                      style={{ textDecoration: 'none', color: '#000' }}
                    >
                      <Button
                        className="classes.headingText"
                        style={{
                          backgroundColor: 'rgb(44 182 95)',
                          borderRadius: '3rem',
                          fontSize: '14px',
                          fontWeight: '600',
                          color: '#fff',
                          width: '15rem',
                          padding: '12px',
                          // boxShadow: '#56b46a 2px 4px 0px 1px',
                          marginTop: '15px',
                        }}
                      >
                        Find a lender!
                      </Button>
                    </Link>
                  </Grid>
                  <Grid xs={12} md={8}>
                    <img
                      width={500}
                      src={IMAGES.dhonibanner}
                      style={{ mixBlendMode: 'multiply' }}
                      alt="Blog"
                    />
                  </Grid>
                </div>
              </Box>
            </Grid>
          </Box>
        </Carousel>
      </Container>

      <Container sx={{ display: { xs: 'block', md: 'none' } }}>
        <Carousel
          breakPoints={breakPoints}
          ref={carouselRef}
          enableAutoPlay
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
          <Box style={{ width: '100%' }}>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              style={{ width: '100%' }}
            >
              <Box
                style={{
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column-reverse',
                    justifyContent: 'center',
                    width: '100%',
                  }}
                >
                  <Grid xs={12} md={4}>
                    <Typography
                      component="h1"
                      style={{
                        fontSize: '35px',
                        color: '#333',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}
                    >
                      Find a lender!
                    </Typography>
                    <Typography
                      fontWeight="bold"
                      color="#000"
                      component="h1"
                      style={{
                        fontSize: '20px',
                        color: '#333',
                        fontWeight: '600',
                        fontFamily: 'Inter',
                        textAlign: 'center',
                      }}
                    >
                      Your short Term Loan is just a match away!
                      <br />
                      On a Mission of financial inclusion for every Indian
                    </Typography>
                    <Link
                      to="/"
                      style={{ textDecoration: 'none', color: '#000' }}
                    >
                      <Button
                        className="classes.headingText"
                        style={{
                          backgroundColor: 'rgb(44 182 95)',
                          borderRadius: '3rem',
                          fontSize: '14px',
                          fontWeight: '600',
                          color: '#fff',
                          width: '15rem',
                          padding: '12px',
                          // boxShadow: '#56b46a 2px 4px 0px 1px',
                          margin: 'auto',
                        }}
                      >
                        Find a lender!
                      </Button>
                    </Link>
                  </Grid>
                  <Grid xs={12} md={8}>
                    <img
                      width={500}
                      src={IMAGES.dhonibanner}
                      style={{ mixBlendMode: 'multiply' }}
                      alt="Blog"
                    />
                  </Grid>
                </div>
              </Box>
            </Grid>
          </Box>
          <Box style={{ width: '100%' }}>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              style={{ width: '100%' }}
            >
              <Box
                style={{
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column-reverse',
                    justifyContent: 'center',
                    width: '100%',
                  }}
                >
                  <Grid xs={12} md={4}>
                    <Typography
                      component="h1"
                      style={{
                        fontSize: '35px',
                        color: '#333',
                        fontWeight: '600',
                        textAlign: 'center',
                      }}
                    >
                      Find a lender!
                    </Typography>
                    <Typography
                      fontWeight="bold"
                      color="#000"
                      component="h1"
                      style={{
                        fontSize: '20px',
                        color: '#333',
                        fontWeight: '600',
                        fontFamily: 'Inter',
                        textAlign: 'center',
                      }}
                    >
                      Your short Term Loan is just a match away!
                      <br />
                      On a Mission of financial inclusion for every Indian
                    </Typography>
                    <Link
                      to="/"
                      style={{ textDecoration: 'none', color: '#000' }}
                    >
                      <Button
                        className="classes.headingText"
                        style={{
                          backgroundColor: 'rgb(44 182 95)',
                          borderRadius: '3rem',
                          fontSize: '14px',
                          fontWeight: '600',
                          color: '#fff',
                          width: '15rem',
                          padding: '12px',
                          // boxShadow: '#56b46a 2px 4px 0px 1px',
                          margin: 'auto',
                        }}
                      >
                        Find a lender!
                      </Button>
                    </Link>
                  </Grid>
                  <Grid xs={12} md={8}>
                    <img
                      width={500}
                      src={IMAGES.dhonibanner}
                      style={{ mixBlendMode: 'multiply' }}
                      alt="Blog"
                    />
                  </Grid>
                </div>
              </Box>
            </Grid>
          </Box>
        </Carousel>
      </Container>
    </Box>
  );
}
