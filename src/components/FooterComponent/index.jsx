import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import logo from './Logo.svg';
import { ICONS } from '../../shared/assets';

const UL = styled('ul')(({ theme }) => ({
  textDecoration: 'none',
  listStyle: 'none',
  marginLeft: '0px',
  paddingBottom: '4rem',
  [theme.breakpoints.down('md')]: {
    textDecoration: 'none',
    listStyle: 'none',
    marginLeft: '0px',
  },
}));

const LI = styled('li')(() => ({
  padding: '10px',
  color: '#f7f7f7 ',
  fontSize: '12px',
}));

const Heading = styled('Typography')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  fontWeight: '600',
  color: 'white',
  [theme.breakpoints.down('md')]: {
    // justifyContent: 'flex-start',
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" style={{ color: 'white' }} align="center">
      {'Copyright © '}
      <Link
        style={{ color: 'white', paddingRight: '5px' }}
        href="https:/credmudra.com"
      >
        Credmudra.com
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

const company = [
  { title: 'About Us', url: '#' },
  { title: 'Careers', url: '#' },
  { title: 'Contact Us', url: '#' },
  { title: 'Corporate', url: '#' },
];
const products = [
  { title: 'Cash Loan', url: '#' },
  { title: 'Personal Loan', url: '#' },
  { title: 'Home Loan', url: '#' },
  { title: 'Health Insurance', url: '#' },
];
const siteMap = [
  { title: 'Blogs', url: '#' },
  { title: 'Web Stories', url: '#' },
  { title: 'Youtube', url: '#' },
  { title: 'Calculators', url: '#' },
];
const usefulLInks = [
  { title: 'Privacy Policy', url: '#' },
  { title: 'Terms & Conditions', url: '#' },
  { title: 'RBI Sachet Portal', url: '#' },
];
function Footer(props) {
  const { description, title } = props;

  return (
    <Box component="footer" sx={{ bgcolor: '#10162c', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item sm={4} xs={12}>
            <Box style={{ marginTop: '-35px' }}>
              <img src={logo} alt="logo" />
              <Typography
                component="p"
                sx={{ fontSize: '14px', color: 'white' }}
              >
                V Mall, 316, Gayatri Nagar, Next to Sai Dham Temple, Kandivali
                East, Mumbai, India, Maharashtra
              </Typography>
              <Box mt={3}>
                <Typography
                  component="h6"
                  sx={{ color: 'white', paddingBottom: '1rem' }}
                >
                  Follow Us
                </Typography>
                <span
                  style={{
                    display: 'flex',
                    // justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <a href="https://facebook.com">
                    <img
                      width="38px"
                      src={ICONS.facebookIcon}
                      alt="fb"
                      style={{ paddingLeft: '3px' }}
                    />
                  </a>
                  <span>
                    <a href="https://www.linkedin.com">
                      <img
                        width="38px"
                        src={ICONS.linkedinIcon}
                        alt="ln"
                        style={{ paddingLeft: '1rem' }}
                      />
                    </a>
                  </span>
                  <a href="https://twitter.com/">
                    <img
                      width="38px"
                      src={ICONS.twitterIcon}
                      alt="tw"
                      style={{ paddingLeft: '1rem' }}
                    />
                  </a>
                </span>
              </Box>
            </Box>
          </Grid>
          <Grid item sm={2} xs={6}>
            <Heading component="h3">Company</Heading>
            <UL>
              {company.map((item) => (
                <Link
                  sx={{ textDecoration: 'none', cursor: 'pointer' }}
                  to={item.url}
                >
                  <LI>{item.title}</LI>
                </Link>
              ))}
            </UL>
          </Grid>
          <Grid item sm={2} xs={6}>
            <Heading component="h3">Products</Heading>
            <UL>
              {products.map((item) => (
                <Link
                  sx={{ textDecoration: 'none', cursor: 'pointer' }}
                  to={item.url}
                >
                  <LI>{item.title}</LI>
                </Link>
              ))}
            </UL>
          </Grid>
          <Grid item sm={2} xs={6}>
            <Heading component="h3">Site Map</Heading>

            <UL>
              {siteMap.map((item) => (
                <Link
                  sx={{ textDecoration: 'none', cursor: 'pointer' }}
                  to={item.url}
                >
                  <LI>{item.title}</LI>
                </Link>
              ))}
            </UL>
          </Grid>
          <Grid item sm={2} xs={6}>
            <Heading component="h3">Useful LInks</Heading>
            <UL>
              {usefulLInks.map((item) => (
                <Link
                  sx={{ textDecoration: 'none', cursor: 'pointer' }}
                  to={item.url}
                >
                  <LI>{item.title}</LI>
                </Link>
              ))}
            </UL>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          {description}
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;
