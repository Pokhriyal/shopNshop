import { makeStyles } from '@mui/styles';

const BannerStyles = makeStyles((theme) => ({
  slider: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column-reverse',
      justifyContent: 'center',
      width: '100%',
    },
  },
  bannerContent: {
    fontSize: '25px',
    color: '#333',
    fontWeight: 500,
  },
  bannerContentButton: {
    backgroundColor: 'orange',
    borderRadius: '3rem',
    fontSize: '12px',
    fontWeight: 600,
    color: 'rgb(255, 255, 255)',
    width: '15rem',
    padding: '15px',
    boxShadow: 'orange 2px 4px 0px 1px',
    marginTop: '15px',
  },
}));

export default BannerStyles;
