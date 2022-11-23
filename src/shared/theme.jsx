import { createTheme, hexToRgb } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 428,
      md: 1024,
      lg: 1440,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#ffffff',
    },
    amber: {
      main: '#ffc200',
    },
    ebonyClay: {
      main: '#222835',
    },
    pattensBlue: {
      main: '#d4ebff',
    },
    watusi: {
      main: '#ffe0d4',
    },
    cream: {
      main: '#fffcd4',
    },
    mischka: {
      main: '#dde0e6',
    },
    mischka50: {
      main: hexToRgb('#dde0e680'),
    },
    athensGray: {
      main: '#eef0f3',
    },
    aquamarineBlue: {
      main: '#64ded6',
    },
    riptide: {
      main: '#7fedb9',
    },
    wildSand: {
      main: '#f6f6f6',
    },
    white: {
      main: '#fefefe',
    },
    porcelain: {
      main: '#f2f3f4',
    },
    albaster: {
      main: '#f8f8f8',
    },
    shuttleGray: {
      main: '#626b7a',
    },
    gullGray: {
      main: '#93a5b6',
    },
    dodgerBlue: {
      main: '#1987ff',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: () => ({
          borderRadius: Number(theme.shape.borderRadius) * 1.25,
          padding: theme.spacing(7, 22),
          height: 30,
        }),
        containedSecondary: () => ({
          boxShadow: theme.shadows[3],
          '&:hover': {
            backgroundColor: theme.palette.white.main,
          },
        }),
        containedPrimary: () => ({
          boxShadow: theme.shadows[3],
          backgroundColor: theme.palette.amber.main,
          color: theme.palette.primary.main,
          '&:hover': {
            backgroundColor: theme.palette.amber.main,
          },
        }),
      },
    },
  },
});

export default theme;
